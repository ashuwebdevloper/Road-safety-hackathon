import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";
import NearestFOB from "./pages/NearestFOB";
import Complaint from "./pages/Complaint";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import AdminProfile from "./pages/AdminProfile";
import UserProfile from "./pages/UserProfile";

// Protected Route Component
const ProtectedRoute = ({ role, children }) => {
  const storedRole = localStorage.getItem("role");
  if (storedRole !== role) {
    return <Navigate to="/sign-in" />; // Redirect to sign-in if not authenticated
  }
  return children;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <img src="https://www.india.gov.in/sites/upload_files/npi/files/logo_1.png" alt="Government of India" />
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/nearest-fob">Nearest FOB</Link></li>
              <li><Link to="/complaint">Complaint</Link></li>
              <li><Link to="/sign-in">Sign In</Link></li>
              {/* <li><Link to="/create-account">Create Your Account</Link></li> */}
            </ul>
          </nav>
          <div className="language-options">
            <button>-A</button>
            <button>A</button>
            <button>A+</button>
            <button>English</button>
          </div>
          <Link to="/create-account"><button className="cta-button">Create Your Account</button></Link>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            {/* Existing Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/nearest-fob" element={<NearestFOB />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/create-account" element={<CreateAccount />} />

            {/* Protected Routes for Admin and User Profiles */}
            <Route
              path="/admin-profile"
              element={
                <ProtectedRoute role="admin">
                  <AdminProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-profile"
              element={
                <ProtectedRoute role="user">
                  <UserProfile />
                </ProtectedRoute>
              }
            />

            {/* Default Redirect to Sign-In */}
            <Route path="*" element={<Navigate to="/sign-in" />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Ministry of Road Transport & Highways</h3>
              <p>Government of India</p>
              <p>indi.gov.in</p>
            </div>
            <div className="footer-section">
              <p>Terms and Conditions || Privacy Policy || Copyright Policy || Accessibility || Disclaimer || Website Site Map || Help</p>
            </div>
            <div className="footer-section">
              <p>Copyright © 2024 All rights reserved</p>
              <p>The boy's</p>
            </div>
            <div className="footer-section">
              <p>Last Updated: 21-03-2025</p>
            </div>
            <div className="footer-section">
              <p>Suspect Corruption?</p>
              <p>1800116062</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;