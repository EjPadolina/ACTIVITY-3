import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllTasks from "./pages/AllTask";
import TaskDetails from "./pages/TaskDetails";
import "./App.css";

function App() {
  const appStyle = {
    minHeight: "100vh",
    background: "radial-gradient(circle at 10% 20%, rgba(30,107,58,0.06) 0, transparent 12%), radial-gradient(circle at 80% 80%, rgba(18,72,38,0.04) 0, transparent 18%), linear-gradient(180deg, #f2fff5 0%, #f7fff9 100%)",
    backgroundAttachment: "fixed",
    paddingBottom: 40,
  };

  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<AllTasks />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
