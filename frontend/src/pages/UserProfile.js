import React, { useState } from "react";
import "./UserProfile.css"; // Import CSS file

const UserProfile = () => {
  // State for managing active section
  const [activeSection, setActiveSection] = useState("profile");

  // State for user profile
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
    profilePicture: null,
  });

  // State for promoting company
  const [companyName, setCompanyName] = useState("");
  const [promotionMessage, setPromotionMessage] = useState("");

  // State for complaints
  const [complaint, setComplaint] = useState("");

  // State for feedback
  const [feedback, setFeedback] = useState("");

  // State for rewards
  const [rewards, setRewards] = useState(100); // Example: 100 reward points

  // State for health analysis
  const [healthAnalysis, setHealthAnalysis] = useState({
    steps: 5000,
    caloriesBurned: 250,
    distance: 3.5, // in kilometers
    heartRate: 72, // in bpm
    sleepDuration: 7.5, // in hours
    activeMinutes: 45, // in minutes
  });

  // Handle profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  // Handle profile picture upload
  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle promote company
  const handlePromoteCompany = (e) => {
    e.preventDefault();
    if (companyName && promotionMessage) {
      alert(`Promotion request submitted for ${companyName}`);
      setCompanyName("");
      setPromotionMessage("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Handle complaint submission
  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    if (complaint) {
      alert("Complaint submitted successfully!");
      setComplaint("");
    } else {
      alert("Please enter your complaint.");
    }
  };

  // Handle feedback submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback) {
      alert("Feedback submitted successfully!");
      setFeedback("");
    } else {
      alert("Please enter your feedback.");
    }
  };

  return (
    <div className="user-profile-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2 className="sidebar-heading">User Dashboard</h2>
        <ul className="sidebar-menu">
          <li>
            <button
              onClick={() => setActiveSection("profile")}
              className={activeSection === "profile" ? "active" : ""}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("promote")}
              className={activeSection === "promote" ? "active" : ""}
            >
              Promote Company
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("complaint")}
              className={activeSection === "complaint" ? "active" : ""}
            >
              Complaint Section
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("rewards")}
              className={activeSection === "rewards" ? "active" : ""}
            >
              Rewards
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("feedback")}
              className={activeSection === "feedback" ? "active" : ""}
            >
              Feedback
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("guide")}
              className={activeSection === "guide" ? "active" : ""}
            >
              Guide
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("health")}
              className={activeSection === "health" ? "active" : ""}
            >
              Health Analysis
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Profile Section */}
        {activeSection === "profile" && (
          <div className="profile-section">
            <h1 className="section-heading">Profile</h1>
            <form onSubmit={handleProfileUpdate} className="profile-form">
              <div className="form-group">
                <label className="form-label"></label>
                <div className="profile-picture-container">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="profile-picture"
                    />
                  ) : (
                    <div className="profile-picture-placeholder">User Image</div>
                  )}
                  <input
                    type="file"
                    onChange={handleProfilePictureUpload}
                    className="profile-picture-input"
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  value={user.address}
                  onChange={(e) => setUser({ ...user, address: e.target.value })}
                  className="form-input"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Update Profile
              </button>
            </form>
          </div>
        )}

        {/* Promote Company Section */}
        {activeSection === "promote" && (
          <div className="promote-section">
            <h1 className="section-heading">Promote Your Company</h1>
            <form onSubmit={handlePromoteCompany} className="promote-form">
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Promotion Message</label>
                <textarea
                  value={promotionMessage}
                  onChange={(e) => setPromotionMessage(e.target.value)}
                  className="form-textarea"
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit Promotion Request
              </button>
            </form>
          </div>
        )}

        {/* Complaint Section */}
        {activeSection === "complaint" && (
          <div className="complaint-section">
            <h1 className="section-heading">Complaint Section</h1>
            <form onSubmit={handleComplaintSubmit} className="complaint-form">
              <div className="form-group">
                <label className="form-label">Enter Your Complaint</label>
                <textarea
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  className="form-textarea"
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit Complaint
              </button>
            </form>
          </div>
        )}

        {/* Rewards Section */}
        {activeSection === "rewards" && (
          <div className="rewards-section">
            <h1 className="section-heading">Rewards</h1>
            <p className="rewards-text">
              You have earned <span className="rewards-points">{rewards}</span> reward
              points for using FOBs.
            </p>
            <button
              onClick={() => alert("Redeem your rewards!")}
              className="submit-button"
            >
              Redeem Rewards
            </button>
          </div>
        )}

        {/* Feedback Section */}
        {activeSection === "feedback" && (
          <div className="feedback-section">
            <h1 className="section-heading">Feedback</h1>
            <form onSubmit={handleFeedbackSubmit} className="feedback-form">
              <div className="form-group">
                <label className="form-label">Enter Your Feedback</label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="form-textarea"
                  rows="4"
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Submit Feedback
              </button>
            </form>
          </div>
        )}

        {/* Guide Section */}
        {activeSection === "guide" && (
          <div className="guide-section">
            <h1 className="section-heading">Guide</h1>
            <div className="guide-content">
              <h2>How to Use the Website</h2>
              <p>
                Welcome to our platform! Here's a quick guide to help you get started:
              </p>
              <ul>
                <li>
                  <strong>Profile:</strong> Update your personal information and
                  profile picture.
                </li>
                <li>
                  <strong>Promote Company:</strong> Submit a request to promote your
                  company on our billboard.
                </li>
                <li>
                  <strong>Complaint Section:</strong> Submit any complaints or issues
                  you encounter.
                </li>
                <li>
                  <strong>Rewards:</strong> Check your reward points and redeem them.
                </li>
                <li>
                  <strong>Feedback:</strong> Share your feedback to help us improve.
                </li>
                <li>
                  <strong>Health Analysis:</strong> View your health metrics, including
                  steps walked, calories burned, distance covered, heart rate, and sleep
                  data.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Health Analysis Section */}
        {activeSection === "health" && (
          <div className="health-section">
            <h1 className="section-heading">Health Analysis</h1>
            <div className="health-metrics">
              <div className="metric-card">
                <h3>Steps Walked</h3>
                <p>{healthAnalysis.steps} steps</p>
              </div>
              <div className="metric-card">
                <h3>Calories Burned</h3>
                <p>{healthAnalysis.caloriesBurned} kcal</p>
              </div>
              <div className="metric-card">
                <h3>Distance Covered</h3>
                <p>{healthAnalysis.distance} km</p>
              </div>
              <div className="metric-card">
                <h3>Heart Rate</h3>
                <p>{healthAnalysis.heartRate} bpm</p>
              </div>
              <div className="metric-card">
                <h3>Sleep Duration</h3>
                <p>{healthAnalysis.sleepDuration} hours</p>
              </div>
              <div className="metric-card">
                <h3>Active Minutes</h3>
                <p>{healthAnalysis.activeMinutes} minutes</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;