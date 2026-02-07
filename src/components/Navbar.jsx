import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    padding: "14px 20px",
    background: "linear-gradient(90deg, #124826 0%, #1e6b3a 100%)",
    color: "#fff",
    boxShadow: "0 3px 12px rgba(18,72,38,0.25)",
  };

  const linkStyle = {
    color: "#e9f7ee",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "8px",
  };

  const brandStyle = {
    ...linkStyle,
    fontSize: "18px",
    letterSpacing: "0.6px",
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Link to="/" style={brandStyle}>
          Task App
        </Link>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <Link to="/tasks" style={linkStyle}>
          All Tasks
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
