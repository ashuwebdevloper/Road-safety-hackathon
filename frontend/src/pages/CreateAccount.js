import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"; // Icons for name, email, and password
import "./CreateAccount.css"; // Import CSS file

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle account creation
  const handleCreateAccount = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate account creation
    alert("Account created successfully!");
    navigate("/sign-in"); // Redirect to sign-in page
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        {/* Heading */}
        <h1 className="create-account-heading">Create Account</h1>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Name Input */}
        <div className="input-group">
          <label className="input-label">Name</label>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="Enter your name"
              required
            />
            <FaUser className="input-icon" />
          </div>
        </div>

        {/* Email Input */}
        <div className="input-group">
          <label className="input-label">Email</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              placeholder="Enter your email"
              required
            />
            <FaEnvelope className="input-icon" />
          </div>
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label className="input-label">Password</label>
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              placeholder="Enter your password"
              required
            />
            <FaLock className="input-icon" />
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="input-group">
          <label className="input-label">Confirm Password</label>
          <div className="relative">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              placeholder="Confirm your password"
              required
            />
            <FaLock className="input-icon" />
          </div>
        </div>

        {/* Create Account Button */}
        <button
          onClick={handleCreateAccount}
          className="create-account-button"
        >
          Create Account
        </button>

        {/* Sign-In Link */}
        <div className="signin-link">
          Already have an account? <a href="/sign-in">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;