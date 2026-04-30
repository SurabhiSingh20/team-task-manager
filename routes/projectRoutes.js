const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  createProject,
  getProjects,
  addMember,
} = require("../controllers/projectController");

router.post("/", auth, createProject);
router.get("/", auth, getProjects);
router.post("/:id/add-member", auth, addMember);

module.exports = router;