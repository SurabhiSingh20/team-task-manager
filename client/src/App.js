import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login Successful");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
const createTask = async () => {
  const token = localStorage.getItem("token");

  await axios.post(
    "http://localhost:5000/api/tasks",
    {
      title: "Frontend Task",
      description: "Created from UI",
      status: "pending",
      dueDate: "2026-05-10"
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  alert("Task Created");
};
<button onClick={createTask}>Create Task</button>
const getTasks = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get("http://localhost:5000/api/tasks", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  console.log(res.data);
};
<button onClick={getTasks}>Get Tasks</button>
