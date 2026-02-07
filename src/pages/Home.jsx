import { useState } from "react";
import { getTasks, saveTasks } from "../utils/storage";
import { useNavigate } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toLocaleString()
    };

    const tasks = getTasks();
    saveTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
    setDueDate("");
    navigate("/tasks");
  };

  const container = {
    padding: 24,
    maxWidth: 820,
    margin: "28px auto",
    background: "#f7fff9",
    borderRadius: 12,
    boxShadow: "0 8px 30px rgba(14,58,34,0.08)",
  };

  const heading = { color: "#124826", marginBottom: 12 };

  const input = {
    width: "100%",
    padding: "12px 14px",
    fontSize: 16,
    borderRadius: 10,
    border: "1px solid #d7eee0",
    outline: "none",
    boxSizing: "border-box",
  };

  const textarea = { ...input, minHeight: 120, resize: "vertical" };

  const button = {
    background: "#1e6b3a",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 700,
  };

  return (
    <div style={container}>
      <h2 style={heading}>Create Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={input}
        />
        <br /><br />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={{ ...input, maxWidth: 260 }}
        />
        <br /><br />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={textarea}
        />
        <br /><br />

        <button style={button}>Add Task</button>
      </form>
    </div>
  );
}

export default Home;
