import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </Router>
  );
}
