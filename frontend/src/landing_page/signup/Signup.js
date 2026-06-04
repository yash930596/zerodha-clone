import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/signup",
        {
          fullname,
          email,
          password,
        }
      );

      alert(response.data.message);  // ✅ Now it reads the note inside

      setFullname("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);

      alert(
        error.response?.data ||
        error.message ||
        "Signup failed"
      );
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Create Account</h2>

      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>

          <input
            type="text"
            className="form-control"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>

          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>

          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;