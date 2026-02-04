import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Faculty from "./pages/Faculty";
// import Dashboard from "./pages/Dashboard"; // demo

export default function App() {
  return (
    <Router>
      <Routes>
        {/* 🔐 AUTH ROUTES */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* 👤 USER DASHBOARD (future protected) */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* 🌍 PUBLIC WEBSITE */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
        </Route>
      </Routes>
    </Router>
  );
}
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Pages
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// // import Courses from "./pages/Courses";
// import Faculty from "./pages/Faculty";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         {/* <Route path="/courses" element={<Courses />} /> */}
//         <Route path="/faculty" element={<Faculty />} />
//       </Routes>
//     </Router>
//   );
// }
