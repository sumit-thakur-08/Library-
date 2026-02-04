import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Register Data 👉", formData);

    // 🔐 FUTURE: API call here
    // axios.post("/api/auth/register", formData)

    navigate("/login"); // demo redirect
  };

  return (
    <div className="bg-white text-gray-500 max-w-md w-full mx-4 md:p-6 p-4 text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Create your account
      </h2>

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          placeholder="Full Name"
          required
        />

        {/* USERNAME */}
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          placeholder="Username"
          required
        />

        {/* EMAIL */}
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Email address"
          required
        />

        {/* PHONE */}
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="tel"
          placeholder="Phone number"
          required
        />

        {/* PASSWORD */}
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Password"
          required
        />

        {/* CONFIRM PASSWORD */}
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Confirm password"
          required
        />

        <button
          type="submit"
          className="w-full mt-2 bg-indigo-600 py-2.5 rounded-full text-white font-medium hover:opacity-90"
        >
          Create Account
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
