const express = require("express");
const mysql = require("mysql2/promise");

const app = express();

const pool = mysql.createPool({
  host: "db",
  user: "root",
  password: "root",
  database: "fullcycle"
});

(async () => {
  const { faker } = await import("@faker-js/faker");

  await pool.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `);

  app.get("/", async (req, res) => {
    const name = faker.person.fullName();

    await pool.execute("INSERT INTO users (name) VALUES (?)", [name]);

    const [rows] = await pool.execute("SELECT name FROM users");

    res.send(
      `<h1>Full Cycle Rocks!</h1>
      <ul>` +
      rows.map((u) => `<li>${u.name}</li>`).join("") +
      `</ul>`
    );
  });

  app.listen(3000, () => console.log("http://localhost:3000"));
})();
