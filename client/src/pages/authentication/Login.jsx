import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/slices/authServices";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
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
    console.log(formData);
  };

  // ✅ login success → dashboard
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="bg-white text-gray-500 max-w-96 w-full mx-4 p-4 md:p-6 text-sm rounded-xl shadow-[0px_0px_10px_0px] shadow-black/10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Welcome back 👋
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
        />

        <input
          name="password"
          type="password"
          required
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          className="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-full py-2.5 px-4"
        />

        {/* ❌ Error */}
        {error && (
          <p className="text-red-500 text-xs mt-2 text-center">{error}</p>
        )}

        <div className="text-right py-4">
          <Link to="/forgot-password" className="text-blue-600 underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mb-3 bg-indigo-500 py-2.5 rounded-full text-white hover:opacity-90 transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>

      <p className="text-center mt-4">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-500 underline">
          Signup
        </Link>
      </p>

      {/* SOCIAL LOGIN (UI ONLY) */}
      <button
        type="button"
        className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png"
          alt="Apple"
        />
        Log in with Apple
      </button>

      <button
        type="button"
        className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
      >
        <img
          className="h-4 w-4"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png"
          alt="Google"
        />
        Log in with Google
      </button>
    </div>
  );
}
