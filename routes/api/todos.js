const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");

//GET request for all Todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//POST request to create new Todo
router.post("/", async (req, res) => {
  const { title, complete } = req.body;
  try {
    todo = new Todo({
      title,
      complete
    });

    await todo.save();

    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//UPDATE request to update completeness
router.put("/:id", async (req, res) => {
  try {
    todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//DELETE request to delete an existing Todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ remove: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
