import { useParams, useNavigate } from "react-router-dom";
import { getTasks, saveTasks } from "../utils/storage";
import { useState } from "react";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tasks = getTasks();
  const task = tasks.find(t => t.id === Number(id));
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [dueDate, setDueDate] = useState(task?.dueDate ? new Date(task.dueDate).toISOString().slice(0,10) : "");

  if (!task) return <p style={{ padding: 24, color: "#6b8b73" }}>Task not found.</p>;

  const updateTask = () => {
    const updated = tasks.map(t =>
      t.id === task.id ? { ...t, title, description, dueDate: dueDate || null } : t
    );
    saveTasks(updated);
    navigate("/tasks");
  };

  const container = {
    padding: 24,
    maxWidth: 760,
    margin: "28px auto",
    background: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 10px 30px rgba(15,55,33,0.06)",
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

  const textarea = { ...input, minHeight: 140, resize: "vertical" };

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
      <h2 style={heading}>Task Details</h2>

      <input value={title} onChange={(e) => setTitle(e.target.value)} style={input} />
      <br /><br />

      <label style={{ color: "#3b5f4a", fontSize: 14 }}>Due date</label>
      <br />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} style={{ ...input, maxWidth: 260 }} />
      <br /><br />

      <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={textarea} />
      <br /><br />

      <button onClick={updateTask} style={button}>Update Task</button>
    </div>
  );
}

export default TaskDetails;
