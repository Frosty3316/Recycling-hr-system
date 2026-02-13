# ♻️ Recycling Production Line Manager Selection System

A minimal full-stack system to rank candidates for a Recycling Production Line Manager role using
MySQL, mock AI evaluation, and a React + Vite dashboard.

This project demonstrates:
- Database design with triggers
- Random candidate generation (Faker.js)
- AI-style evaluation prompts (mocked scoring)
- A functional dashboard with leaderboard, heatmap, and candidate profiles

---

## ✨ Features

- ✅ MySQL schema with:
  - candidates
  - evaluations (crisis, sustainability, motivation)
  - rankings (auto-updated using trigger)
- 🎲 Faker.js seed script to generate 40 realistic candidates
- 🧠 AI evaluation prompts (mock AI scoring)
- 🏆 Leaderboard (Top 10 candidates)
- 🔥 Skill heatmap for scores
- 👤 Candidate cards with detailed profiles
- 🔁 Sortable leaderboard (click headers)
- 📤 Share Candidate button (HR workflow simulation)

---

## 🧰 Tech Stack

- Frontend: React + Vite + Mantine UI  
- Backend: Node.js + Express  
- Database: MySQL  
- Mock AI: Randomized scoring + documented prompts  
- ORM/Driver: mysql2  

---

## 📂 Project Structure

