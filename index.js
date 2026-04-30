require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
connectDB();

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
console.log("MONGO_URI:", process.env.MONGO_URI);
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use('/api/tasks', require('./routes/taskRoutes'));

app.use(cors());