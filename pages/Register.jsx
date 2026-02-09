import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // same style use pannalaam

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    const userData = { name, email, password };

    localStorage.setItem("registeredUser", JSON.stringify(userData));

    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-logo">JobPortal</h1>
        <h2>Sign up</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button className="login-btn" onClick={handleRegister}>
          Sign up
        </button>

        <p className="signup-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
