import express from "express";
import { pool } from "./db.js";

const router = express.Router();

// All candidates with scores
router.get("/candidates", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT c.id, c.name, c.experience, c.skills,
             e.crisis_score, e.sustainability_score, e.motivation_score,
             r.total_score, r.rank_position
      FROM candidates c
      JOIN evaluations e ON c.id = e.candidate_id
      JOIN rankings r ON c.id = r.candidate_id
      ORDER BY r.rank_position ASC
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch candidates" });
  }
});

// Leaderboard (Top 10)
router.get("/leaderboard", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT c.name, r.total_score, r.rank_position
      FROM rankings r
      JOIN candidates c ON c.id = r.candidate_id
      ORDER BY r.rank_position ASC
      LIMIT 10
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
});

// ✅ Recompute rankings
router.post("/recompute-rankings", async (req, res) => {
  try {
    // 1️⃣ Force recompute scores
    const [scores] = await pool.query(`
      UPDATE rankings r
      JOIN evaluations e ON r.candidate_id = e.candidate_id
      SET r.total_score =
        e.crisis_score + e.sustainability_score + e.motivation_score
        + FLOOR(RAND() * 2)
    `);

    // 2️⃣ Reassign ranks deterministically
    const [ranks] = await pool.query(`
      UPDATE rankings r
      JOIN (
        SELECT candidate_id,
               DENSE_RANK() OVER (ORDER BY total_score DESC) AS new_rank
        FROM rankings
      ) x
      ON r.candidate_id = x.candidate_id
      SET r.rank_position = x.new_rank
    `);

    // 3️⃣ Echo back what changed (debug gold)
    res.json({
      success: true,
      scoresAffected: scores.affectedRows,
      ranksAffected: ranks.affectedRows,
    });
  } catch (err) {
    console.error("Recompute failed:", err);
    res.status(500).json({ error: err.message });
  }
});

// Single candidate
router.get("/candidate/:id", async (req, res) => {
  try {
    const [rows] = await pool.query(
      `
      SELECT c.id, c.name, c.experience, c.skills,
             e.crisis_score, e.sustainability_score, e.motivation_score,
             r.total_score, r.rank_position
      FROM candidates c
      JOIN evaluations e ON c.id = e.candidate_id
      JOIN rankings r ON c.id = r.candidate_id
      WHERE c.id = ?
    `,
      [req.params.id]
    );

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch candidate" });
  }
});

export default router;