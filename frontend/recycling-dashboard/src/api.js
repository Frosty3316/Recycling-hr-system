import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

export const fetchCandidates = () => API.get("/candidates");
export const fetchLeaderboard = () => API.get("/leaderboard");

// new endpoint
export const recomputeRankings = () => API.post("/recompute-rankings");