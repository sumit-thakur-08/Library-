//
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./layout/Layout"; // Public / User
import AuthLayout from "./layout/AuthLayout"; // Login / Register
import AdminLayout from "./layout/admin/AdminLayout"; // 👑 Admin (new)

// Pages - Public / User
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import Books from "./pages/books/Books";

// Pages - Auth
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";

// Pages - Admin
import Dashboard from "./pages/admin/Dashboard";
import ManageBooks from "./pages/admin/ManageBooks";
import ManageUsers from "./pages/admin/ManageUsers";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ================= AUTH ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ================= PUBLIC / USER ================= */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
        </Route>

        {/* Books ko bahar rakha – public access */}
        <Route path="/books" element={<Books />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="books" element={<ManageBooks />} />
          <Route path="users" element={<ManageUsers />} />
        </Route>
      </Routes>
    </Router>
  );
}
