import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUserApi } from "../../services/authService";

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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ frontend validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // ❌ confirmPassword backend ko nahi bhejna
    const { confirmPassword, ...payload } = formData;

    try {
      setLoading(true);

      const res = await registerUserApi(payload);
      console.log("Register Success 👉", res.data);

      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-gray-500 max-w-md w-full mx-4 md:p-6 p-4 text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Create your account
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="text"
          placeholder="Username"
          required
        />

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="email"
          placeholder="Email address"
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="tel"
          placeholder="Phone number"
          required
        />

        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-transparent border my-2 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Password"
          required
        />

        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
          type="password"
          placeholder="Confirm password"
          required
        />

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 bg-indigo-600 py-2.5 rounded-full text-white font-medium hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create Account"}
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
