const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.send("Error", +err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/add/", async (req, res) => {
  const todo = new Todo({
    name: req.body.name,
  });
  try {
    const t1 = await todo.save();
    res.json(t1);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.name = req.body.name;
    const t1 = await todo.save();
    res.json(t1);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    const t1 = await todo.remove();
    res.json(t1);
  } catch (err) {
    res.send("Error" + err);
  }
});
module.exports = router;
