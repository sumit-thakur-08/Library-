import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Layouts
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
// Pages
import Home from "./pages/Home";
import Login from "./pages/authentication/Login";
import Faculty from "./pages/Faculty";
import Register from "./pages/authentication/Register";
import Books from "./pages/books/Books";
import AdminLayout from "./layout/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
// import Dashboard from "./pages/Dashboard"; // demo

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🔐 AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* 👤 USER DASHBOARD (future protected) */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* 🌍 PUBLIC WEBSITE */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
        </Route>
        <Route path="/books" element={<Books />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
