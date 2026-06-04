import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3002/login", {
      email,
      password,
    });

    const token = response.data.token;

    // ✅ Save token and go to dashboard
    localStorage.setItem("token", token);
    window.location.href = `http://localhost:3001?token=${token}`;

  } catch (error) {
    alert(error.response?.data?.message || "Login failed. Please try again.");
  }
};

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;