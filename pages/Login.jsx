import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("user", email);
      navigate("/profile");
    } else {
      alert("Enter email & password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-logo">JobPortal</h1>
        <h2>Login</h2>
        <p className="subtitle">Access your JobPortal account</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="login-btn">
          Login
        </button>

        <p className="signup-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
