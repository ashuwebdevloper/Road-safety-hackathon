import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa"; // Social media icons
import "./SignIn.css"; // Import CSS file

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle login
  const handleLogin = (role) => {
    // Simulate authentication
    if (email && password) {
      localStorage.setItem("role", role); // Store role in localStorage
      navigate(`/${role}-profile`); // Redirect to profile page
    } else {
      setError("Please enter email and password.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        {/* Heading */}
        <h1 className="signin-heading">Login</h1>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Email Input */}
        <div className="input-group">
          <label className="input-label">Username</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Type your username"
            required
          />
        </div>

        {/* Password Input */}
        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Type your password"
            required
          />
        </div>

        {/* Forgot Password Link */}
        <div className="forgot-password">
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </div>

        {/* Admin Login Button */}
        <button
          onClick={() => handleLogin("admin")}
          className="login-button admin-button"
        >
          Admin Login
        </button>

        {/* User Login Button */}
        <button
          onClick={() => handleLogin("user")}
          className="login-button user-button"
        >
          User Login
        </button>

        {/* Divider */}
        <div className="divider">Or Sign Up Using</div>

        {/* Social Login Buttons */}
        <div className="social-login">
          <button className="social-button facebook">
            <FaFacebook className="icon" />
          </button>
          <button className="social-button twitter">
            <FaTwitter className="icon" />
          </button>
          <button className="social-button google">
            <FaGoogle className="icon" />
          </button>
        </div>

        {/* Sign Up Section */}
        <div className="signup-section">
          <a href="/signup" className="signup-link">
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;