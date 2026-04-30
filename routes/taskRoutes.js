const Task = require('../models/Task');
const express = require('express');
const router = express.Router();

// Create Task
router.post('/', (req, res) => {
  const { title, description, status, dueDate } = req.body;

  res.json({
    msg: 'Task created successfully',
    task: { title, description, status, dueDate }
  });
});

// Get Tasks
router.get('/', (req, res) => {
  res.json({
    tasks: []
  });
});

module.exports = router;
// DASHBOARD STATS
router.get('/dashboard', async (req, res) => {
  try {
    const total = await Task.countDocuments();
    const completed = await Task.countDocuments({ status: 'completed' });
    const pending = await Task.countDocuments({ status: 'pending' });
    const overdue = await Task.countDocuments({
      dueDate: { $lt: new Date() },
      status: 'pending'
    });

    res.json({
      total,
      completed,
      pending,
      overdue
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});