const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // allow JSON bodies
app.use(express.static(path.join(__dirname, "public"))); // serve HTML/CSS/etc

// JSON object stored on the server (list you can add/remove)
let tasks = [
  { id: 1, title: "Finish CPS630 A1 skeleton", done: false },
  { id: 2, title: "Record 60s demo video", done: false }
];
let nextId = 3;

// ----- HTML Routes (3 pages) -----
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/tasks", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "tasks.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// ----- REST API (GET, POST, DELETE) -----

// GET: return the full list
app.get("/api/tasks", (req, res) => {
  res.status(200).json({ items: tasks });
});

// POST: add a new item
app.post("/api/tasks", (req, res) => {
  const title = (req.body?.title || "").trim();

  // 400 Bad Request if client sends invalid data
  if (!title) {
    return res.status(400).json({ error: "title is required" });
  }

  const newTask = { id: nextId++, title, done: false };
  tasks.push(newTask);

  // 201 Created when a new resource is created
  res.status(201).json({ item: newTask, message: "Task created" });
});

// DELETE: remove an item by id
app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  // 400 Bad Request if id isn’t a number
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const index = tasks.findIndex((t) => t.id === id);

  // 404 Not Found if item doesn't exist
  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deleted = tasks.splice(index, 1)[0];

  // 200 OK (or 204 No Content) when deletion succeeds
  res.status(200).json({ deleted, message: "Task deleted" });
});


// 404 handler (invalid requests)
app.use((req, res) => {
  // If it's an API route, return JSON
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ error: "API route not found" });
  }
  // Otherwise return a normal message/page
  res.status(404).send("404 - Page not found");
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
