import mysql from "mysql2/promise";
import { faker } from "@faker-js/faker";

const db = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Mysql@33",
  database: "recycling_hr",
  port: 3306,
});

const skillsPool = [
  "Operations",
  "Leadership",
  "Waste Management",
  "Logistics",
  "Team Handling",
  "Safety Protocols",
  "Inventory",
  "Process Optimization",
];

for (let i = 0; i < 40; i++) {
  const name = faker.person.fullName();
  const experience = faker.number.int({ min: 1, max: 15 });
  const skills = faker.helpers.arrayElements(skillsPool, 3).join(", ");

  const [res] = await db.execute(
    "INSERT INTO candidates (name, experience, skills) VALUES (?, ?, ?)",
    [name, experience, skills]
  );

  const crisis = faker.number.int({ min: 1, max: 10 });
  const sustainability = faker.number.int({ min: 1, max: 10 });
  const motivation = faker.number.int({ min: 1, max: 10 });

  await db.execute(
    "INSERT INTO evaluations (candidate_id, crisis_score, sustainability_score, motivation_score) VALUES (?, ?, ?, ?)",
    [res.insertId, crisis, sustainability, motivation]
  );
}

console.log("40 candidates generated 🚀");
process.exit();