# ♻️ Recycling Production Line Manager Selection System

A minimal full-stack system to rank candidates for a Recycling Production Line Manager role using
MySQL, mock AI evaluation, and a React + Vite dashboard.

This project demonstrates:
- Database design with indexes and triggers
- Random candidate generation (Faker.js)
- AI-style evaluation prompts (mocked scoring)
- A functional dashboard with leaderboard, heatmap, and candidate profiles

---

## ✨ Features

Database
- ✅ MySQL schema with:
  - candidates
  - evaluations (crisis, sustainability, motivation)
  - rankings (auto-updated using trigger)
  - ⚡ Indexes for faster leaderboard queries
  - 🔁 Triggers to auto-sync total_score on insert & update

Data
- 🎲 Faker.js seed script to generate 40 realistic candidates

AI (Mocked)
- 🧠 AI evaluation prompts (mock AI scoring)
- 📄 Prompts documented in ai-prompts.md

Dashboard
- 🏆 Leaderboard (Top 10 candidates)
- 🔥 Skill heatmap for scores
- 👤 Candidate cards with detailed profiles
- 🔁 Sortable leaderboard (click headers)
- 📤 Share Candidate button (HR workflow simulation)
- 🔄 Recompute rankings

---

## 🧰 Tech Stack

- Frontend: React + Vite + Mantine UI  
- Backend: Node.js + Express  
- Database: MySQL
- DB Driver: mysql2
- Mock AI: Randomized scoring + documented prompts  
- Data Generation: Faker.js

---

## 📂 Project Structure

recycling-hr-system/
│
├── backend/
├── database/
│   ├── schema.sql
│   ├── seed.js
│   └── seed.sql
│
├── frontend/
│   └── recycling-dashboard/
│
├── ai-prompts.md
└── README.md

---

🚀 Setup Instructions

1️⃣ Clone the repo

```
git clone https://github.com/Frosty3316/Recycling-hr-system.git
cd Recycling-hr-system
```

2️⃣ Setup Database (MySQL)

Create database:
```
CREATE DATABASE recycling_hr;
```

Import schema and seed:
```
mysql -u root -p recycling_hr < database/schema.sql
mysql -u root -p recycling_hr < database/seed.sql
```
The schema includes indexes and triggers to auto-sync ranking scores.

3️⃣ Start Backend

```
cd backend
npm install
npm run dev
```

Create a .env file in /backend:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=recycling_hr
```

4️⃣ Start Frontend

```
cd frontend/recycling-dashboard
npm install
npm run dev
```
Open:
👉 http://localhost:5173

---

📸 Demo
https://drive.google.com/file/d/1-zS_tWDlsBgsueJGKifcM9GSzMo1NUSI/view?usp=sharing

---

🧠 AI Prompts

- Crisis management
- Sustainability knowledge
- Team motivation
(Mock AI responses are used for this assignment.)

---

📝 Notes

- Rankings can be recomputed from the dashboard.
- DB triggers keep total_score in sync when evaluations change.
- Indexes improve leaderboard performance.
