const Project = require("../models/Project");

// CREATE PROJECT (Admin only)
exports.createProject = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Only admin can create project" });
    }

    const project = await Project.create({
      name: req.body.name,
      description: req.body.description,
      createdBy: req.user._id,
      members: [req.user._id],
    });

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET PROJECTS
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      members: req.user._id,
    }).populate("members", "name email");

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD MEMBER
exports.addMember = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) return res.status(404).json({ msg: "Project not found" });

    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Only admin can add members" });
    }

    project.members.push(req.body.userId);
    await project.save();

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};