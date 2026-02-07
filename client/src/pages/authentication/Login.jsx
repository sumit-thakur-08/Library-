import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authServices";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated, role } = useSelector(
    (state) => state.auth,
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (isAuthenticated && role) {
      role.toLowerCase() === "admin"
        ? navigate("/admin/dashboard")
        : navigate("/books");
    }
  }, [isAuthenticated, role, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Welcome back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="email"
            placeholder="Email or Username"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-full border px-5 py-3 focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-full border px-5 py-3 focus:ring-2 focus:ring-indigo-400"
            required
          />

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2 rounded-lg text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full font-medium disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Signup
          </Link>
        </p>

        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-3 rounded-full mb-3">
          <FaApple size={18} /> Log in with Apple
        </button>

        <button className="w-full flex items-center justify-center gap-3 border py-3 rounded-full">
          <FcGoogle size={20} /> Log in with Google
        </button>
      </div>
    </div>
  );
}
