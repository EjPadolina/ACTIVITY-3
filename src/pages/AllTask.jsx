import { Link } from "react-router-dom";
import { getTasks, saveTasks } from "../utils/storage";
import { useState } from "react";

function AllTasks() {
  const [tasks, setTasks] = useState(getTasks());

  const deleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    saveTasks(updated);
    setTasks(updated);
  };

  const container = {
    padding: 24,
    maxWidth: 980,
    margin: "28px auto",
  };

  const heading = { color: "#124826", marginBottom: 12 };

  const card = {
    background: "#ffffff",
    borderRadius: 12,
    padding: 16,
    boxShadow: "0 8px 20px rgba(17,62,35,0.06)",
    marginBottom: 14,
    border: "1px solid #e6f3ea",
  };

  const titleStyle = { margin: 0, color: "#0b3f25" };
  const metaStyle = { color: "#6b8b73", fontSize: 13 };

  const linkStyle = {
    display: "inline-block",
    marginTop: 8,
    color: "#1e6b3a",
    textDecoration: "none",
    fontWeight: 700,
  };

  const delBtn = {
    background: "transparent",
    border: "1px solid #f28b82",
    color: "#b00020",
    padding: "6px 10px",
    borderRadius: 8,
    cursor: "pointer",
    marginLeft: 8,
  };

  return (
    <div style={container}>
      <h2 style={heading}>All Tasks</h2>

      {tasks.length === 0 && <p style={{ color: "#3b5f4a" }}>No tasks found.</p>}

      {tasks.map(task => (
        <div key={task.id} style={card}>
          <h3 style={titleStyle}>{task.title}</h3>
          <p style={metaStyle}>Created: {task.createdAt}</p>
          {task.dueDate && (
            <p style={{ ...metaStyle, fontWeight: 700 }}>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
          )}

          <div style={{ marginTop: 8 }}>
            <Link to={`/tasks/${task.id}`} style={linkStyle}>View Details</Link>
            <button style={delBtn} onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllTasks;
