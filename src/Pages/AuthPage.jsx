import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleAuth = async () => {
    setLoading(true);
    setError("");

    const { data, error } = isLogin
      ? await SupabaseAuthClient.auth.signInWithPassword({ email, password })
      : await SupabaseAuthClient.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="w-full max-w-sm p-6 bg-zinc-900 rounded-xl shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <input
          className="w-full mb-3 p-2 rounded bg-zinc-800"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 p-2 rounded bg-zinc-800"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button
          onClick={handleAuth}
          disabled={loading}
          className="w-full bg-pink-600 hover:bg-pink-700 py-2 rounded text-white font-semibold"
        >
          {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-pink-400 hover:underline"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
