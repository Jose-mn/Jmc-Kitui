import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simple authentication (replace with backend call when available)
    if (email === "admin@jmc.com" && password === "admin123") {
      localStorage.setItem("token", "admin-token-" + Date.now());
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-jmcPrimary flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-jmcPrimary rounded-full text-white">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-jmcPrimary">Admin Login</h2>
          <p className="text-gray-600 text-sm mt-2">
            Jesus Manifestation Church
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@jmc.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jmcPrimary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jmcPrimary"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-jmcPrimary hover:bg-jmcPrimary/90 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-xs text-gray-600">
          <p className="font-semibold mb-2">Demo Credentials:</p>
          <p>Email: <span className="font-mono bg-white px-2 py-1 rounded">admin@jmc.com</span></p>
          <p>Password: <span className="font-mono bg-white px-2 py-1 rounded">admin123</span></p>
        </div>
      </div>
    </div>
  );
}
