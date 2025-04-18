import React, { useState, useEffect } from "react";
import "./AdminProfile.css";

const AdminProfile = () => {
  // State for managing active section
  const [activeSection, setActiveSection] = useState("complaints");

  // State for received complaints
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      userId: "user123",
      userName: "John Doe",
      message: "The billboard near Main Street is not working properly.",
      date: "2023-05-15",
      status: "pending",
    },
    {
      id: 2,
      userId: "user456",
      userName: "Jane Smith",
      message: "I didn't receive my reward points for last month's activity.",
      date: "2023-05-10",
      status: "resolved",
    },
  ]);

  // State for promotion requests
  const [promotionRequests, setPromotionRequests] = useState([
    {
      id: 1,
      companyName: "ABC Corp",
      message: "We want to promote our new product line on your billboards.",
      contactEmail: "contact@abccorp.com",
      date: "2023-05-12",
      status: "pending",
    },
    {
      id: 2,
      companyName: "XYZ Ltd",
      message: "Request to display our brand logo for 2 weeks.",
      contactEmail: "marketing@xyzltd.com",
      date: "2023-05-08",
      status: "approved",
    },
  ]);

  // State for daily stats
  const [dailyStats, setDailyStats] = useState({
    date: new Date().toISOString().split('T')[0],
    activeUsers: 1245,
    billboardViews: 8765,
    complaintsReceived: 12,
    promotionsApproved: 5,
    rewardsDistributed: 3420,
  });

  // State for media updates
  const [mediaUpdates, setMediaUpdates] = useState([
    {
      id: 1,
      title: "Summer Campaign",
      description: "New summer collection promotion",
      imageUrl: "",
      startDate: "2023-06-01",
      endDate: "2023-06-30",
      status: "active",
    },
  ]);

  // State for new media upload
  const [newMedia, setNewMedia] = useState({
    title: "",
    description: "",
    image: null,
    startDate: "",
    endDate: "",
  });

  // State for notices
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "System Maintenance",
      content: "The system will be down for maintenance on June 5th from 2 AM to 4 AM.",
      date: "2023-05-20",
      priority: "high",
    },
  ]);

  // State for new notice
  const [newNotice, setNewNotice] = useState({
    title: "",
    content: "",
    priority: "medium",
  });

  // State for FOB Prediction Model
  const [zones, setZones] = useState([
    {
      id: 1,
      name: "Main Street Intersection",
      category: "red",
      complaints: 15,
      pedestrianCount: 1200,
      lastSurveyDate: "2023-05-10",
      priority: "High"
    },
    {
      id: 2,
      name: "Central Business District",
      category: "yellow",
      complaints: 8,
      pedestrianCount: 800,
      lastSurveyDate: "2023-05-15",
      priority: "Medium"
    },
    {
      id: 3,
      name: "University Crossing",
      category: "green",
      complaints: 3,
      pedestrianCount: 400,
      lastSurveyDate: "2023-05-12",
      priority: "Low"
    }
  ]);
  

  // State for Traffic Camera Integration
  const [cameras, setCameras] = useState([
    {
      id: 1,
      location: "Main Street Intersection",
      status: "active",
      lastViolation: "2023-05-20 08:45",
      liveFeed: "camera1"
    },
    {
      id: 2,
      location: "Central Business District",
      status: "active",
      lastViolation: "2023-05-20 09:15",
      liveFeed: "camera2"
    },
    {
      id: 3,
      location: "University Crossing",
      status: "maintenance",
      lastViolation: "2023-05-19 17:30",
      liveFeed: "camera3"
    }
  ]);

  const [selectedCamera, setSelectedCamera] = useState(null);
  const [violations, setViolations] = useState([
    {
      id: 1,
      cameraId: 1,
      timestamp: "2023-05-20 08:45",
      type: "Jaywalking",
      image: "violation1.jpg",
      status: "unresolved"
    },
    {
      id: 2,
      cameraId: 2,
      timestamp: "2023-05-20 09:15",
      type: "Crossing on red",
      image: "violation2.jpg",
      status: "unresolved"
    }
  ]);

  // Handle complaint resolution
  const handleResolveComplaint = (id) => {
    setComplaints(
      complaints.map((complaint) =>
        complaint.id === id ? { ...complaint, status: "resolved" } : complaint
      )
    );
  };

  // Handle promotion request decision
  const handlePromotionDecision = (id, decision) => {
    setPromotionRequests(
      promotionRequests.map((request) =>
        request.id === id ? { ...request, status: decision } : request
      )
    );
  };

  // Handle media upload
  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMedia({ ...newMedia, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle new media submission
  const handleNewMediaSubmit = (e) => {
    e.preventDefault();
    if (newMedia.title && newMedia.description && newMedia.image) {
      const newMediaItem = {
        id: mediaUpdates.length + 1,
        title: newMedia.title,
        description: newMedia.description,
        imageUrl: newMedia.image,
        startDate: newMedia.startDate || new Date().toISOString().split('T')[0],
        endDate: newMedia.endDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: "active",
      };
      setMediaUpdates([...mediaUpdates, newMediaItem]);
      setNewMedia({
        title: "",
        description: "",
        image: null,
        startDate: "",
        endDate: "",
      });
      alert("Media added successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  // Handle notice submission
  const handleNoticeSubmit = (e) => {
    e.preventDefault();
    if (newNotice.title && newNotice.content) {
      const notice = {
        id: notices.length + 1,
        title: newNotice.title,
        content: newNotice.content,
        date: new Date().toISOString().split('T')[0],
        priority: newNotice.priority,
      };
      setNotices([...notices, notice]);
      setNewNotice({
        title: "",
        content: "",
        priority: "medium",
      });
      alert("Notice published successfully!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  // Handle date change for stats
  const handleDateChange = (e) => {
    setDailyStats({
      ...dailyStats,
      date: e.target.value,
    });
  };

  // Handle FOB zone updates
  const handleZoneUpdate = (id, newCategory) => {
    setZones(zones.map(zone => 
      zone.id === id ? { 
        ...zone, 
        category: newCategory,
        priority: newCategory === "red" ? "High" : 
                 newCategory === "yellow" ? "Medium" : "Low"
      } : zone
    ));
  };

  // Handle violation resolution
  const handleResolveViolation = (id) => {
    setViolations(violations.map(violation =>
      violation.id === id ? { ...violation, status: "resolved" } : violation
    ));
  };

  // Handle camera selection
  const handleCameraSelect = (camera) => {
    setSelectedCamera(camera);
  };

  return (
    <div className="admin-profile-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <h2 className="sidebar-heading">Admin Dashboard</h2>
        <ul className="sidebar-menu">
          <li>
            <button
              onClick={() => setActiveSection("complaints")}
              className={activeSection === "complaints" ? "active" : ""}
            >
              Received Complaints
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("promotions")}
              className={activeSection === "promotions" ? "active" : ""}
            >
              Promotion Requests
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("stats")}
              className={activeSection === "stats" ? "active" : ""}
            >
              Daily Statistics
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("media")}
              className={activeSection === "media" ? "active" : ""}
            >
              Update Media
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("notices")}
              className={activeSection === "notices" ? "active" : ""}
            >
              Publish Notices
            </button>
          </li>
          {/* New Sections */}
          <li>
            <button
              onClick={() => setActiveSection("fob-prediction")}
              className={activeSection === "fob-prediction" ? "active" : ""}
            >
              FOB Prediction
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection("traffic-cameras")}
              className={activeSection === "traffic-cameras" ? "active" : ""}
            >
              Traffic Cameras
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Received Complaints Section */}
        {activeSection === "complaints" && (
          <div className="complaints-section">
            <h1 className="section-heading">Received Complaints</h1>
            <div className="complaints-list">
              {complaints.length > 0 ? (
                <table className="complaints-table">
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complaints.map((complaint) => (
                      <tr key={complaint.id}>
                        <td>{complaint.userName}</td>
                        <td>{complaint.message}</td>
                        <td>{complaint.date}</td>
                        <td>
                          <span className={`status-badge ${complaint.status}`}>
                            {complaint.status}
                          </span>
                        </td>
                        <td>
                          {complaint.status === "pending" && (
                            <button
                              onClick={() => handleResolveComplaint(complaint.id)}
                              className="action-button resolve"
                            >
                              Resolve
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No complaints received.</p>
              )}
            </div>
          </div>
        )}

        {/* Promotion Requests Section */}
        {activeSection === "promotions" && (
          <div className="promotions-section">
            <h1 className="section-heading">Promotion Requests</h1>
            <div className="promotions-list">
              {promotionRequests.length > 0 ? (
                <table className="promotions-table">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Message</th>
                      <th>Contact</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {promotionRequests.map((request) => (
                      <tr key={request.id}>
                        <td>{request.companyName}</td>
                        <td>{request.message}</td>
                        <td>{request.contactEmail}</td>
                        <td>{request.date}</td>
                        <td>
                          <span className={`status-badge ${request.status}`}>
                            {request.status}
                          </span>
                        </td>
                        <td>
                          {request.status === "pending" && (
                            <div className="action-buttons">
                              <button
                                onClick={() => handlePromotionDecision(request.id, "approved")}
                                className="action-button approve"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handlePromotionDecision(request.id, "rejected")}
                                className="action-button reject"
                              >
                                Reject
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No promotion requests received.</p>
              )}
            </div>
          </div>
        )}

        {/* Daily Statistics Section */}
        {activeSection === "stats" && (
          <div className="stats-section">
            <h1 className="section-heading">Daily Statistics</h1>
            <div className="stats-controls">
              <label>
                Select Date:
                <input
                  type="date"
                  value={dailyStats.date}
                  onChange={handleDateChange}
                  className="date-input"
                />
              </label>
            </div>
            <div className="stats-cards">
              <div className="stat-card">
                <h3>Active Users</h3>
                <p>{dailyStats.activeUsers}</p>
              </div>
              <div className="stat-card">
                <h3>Billboard Views</h3>
                <p>{dailyStats.billboardViews}</p>
              </div>
              <div className="stat-card">
                <h3>Complaints Received</h3>
                <p>{dailyStats.complaintsReceived}</p>
              </div>
              <div className="stat-card">
                <h3>Promotions Approved</h3>
                <p>{dailyStats.promotionsApproved}</p>
              </div>
              <div className="stat-card">
                <h3>Rewards Distributed</h3>
                <p>{dailyStats.rewardsDistributed}</p>
              </div>
            </div>
            <div className="stats-chart">
              <h3>Activity Over Time</h3>
              <div className="chart-placeholder">
                <p>Chart visualization would appear here</p>
              </div>
            </div>
          </div>
        )}

        {/* Update Media Section */}
        {activeSection === "media" && (
          <div className="media-section">
            <h1 className="section-heading">Update Media</h1>
            <div className="media-content">
              <div className="current-media">
                <h2>Current Media</h2>
                {mediaUpdates.length > 0 ? (
                  <div className="media-list">
                    {mediaUpdates.map((media) => (
                      <div key={media.id} className="media-item">
                        <div className="media-image">
                          {media.imageUrl ? (
                            <img src={media.imageUrl} alt={media.title} />
                          ) : (
                            <div className="image-placeholder">No Image</div>
                          )}
                        </div>
                        <div className="media-details">
                          <h3>{media.title}</h3>
                          <p>{media.description}</p>
                          <p>
                            <strong>Active:</strong> {media.startDate} to {media.endDate}
                          </p>
                          <p>
                            <strong>Status:</strong> {media.status}
                          </p>
                        </div>
                        <div className="media-actions">
                          <button className="action-button edit">Edit</button>
                          <button className="action-button deactivate">
                            {media.status === "active" ? "Deactivate" : "Activate"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No media currently active.</p>
                )}
              </div>
              <div className="add-media">
                <h2>Add New Media</h2>
                <form onSubmit={handleNewMediaSubmit} className="media-form">
                  <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      value={newMedia.title}
                      onChange={(e) =>
                        setNewMedia({ ...newMedia, title: e.target.value })
                      }
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea
                      value={newMedia.description}
                      onChange={(e) =>
                        setNewMedia({ ...newMedia, description: e.target.value })
                      }
                      className="form-textarea"
                      rows="3"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Image</label>
                    <input
                      type="file"
                      onChange={handleMediaUpload}
                      className="form-input"
                      accept="image/*"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Start Date</label>
                      <input
                        type="date"
                        value={newMedia.startDate}
                        onChange={(e) =>
                          setNewMedia({ ...newMedia, startDate: e.target.value })
                        }
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">End Date</label>
                      <input
                        type="date"
                        value={newMedia.endDate}
                        onChange={(e) =>
                          setNewMedia({ ...newMedia, endDate: e.target.value })
                        }
                        className="form-input"
                      />
                    </div>
                  </div>
                  <button type="submit" className="submit-button">
                    Add Media
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Publish Notices Section */}
        {activeSection === "notices" && (
          <div className="notices-section">
            <h1 className="section-heading">Publish Notices</h1>
            <div className="notices-content">
              <div className="current-notices">
                <h2>Published Notices</h2>
                {notices.length > 0 ? (
                  <div className="notices-list">
                    {notices.map((notice) => (
                      <div
                        key={notice.id}
                        className={`notice-item ${notice.priority}`}
                      >
                        <h3>{notice.title}</h3>
                        <p>{notice.content}</p>
                        <div className="notice-footer">
                          <span className="notice-date">{notice.date}</span>
                          <span className="notice-priority">
                            {notice.priority} priority
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No notices published.</p>
                )}
              </div>
              <div className="add-notice">
                <h2>Create New Notice</h2>
                <form onSubmit={handleNoticeSubmit} className="notice-form">
                  <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      value={newNotice.title}
                      onChange={(e) =>
                        setNewNotice({ ...newNotice, title: e.target.value })
                      }
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Content</label>
                    <textarea
                      value={newNotice.content}
                      onChange={(e) =>
                        setNewNotice({ ...newNotice, content: e.target.value })
                      }
                      className="form-textarea"
                      rows="4"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Priority</label>
                    <select
                      value={newNotice.priority}
                      onChange={(e) =>
                        setNewNotice({ ...newNotice, priority: e.target.value })
                      }
                      className="form-select"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <button type="submit" className="submit-button">
                    Publish Notice
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

         {/* New FOB Prediction Model Section */}
         {activeSection === "fob-prediction" && (
          <div className="fob-prediction-section">
            <h1 className="section-heading">FOB Requirement Prediction</h1>
            <div className="zone-categories">
              <div className="category-info red">
                <h3>Red Zones</h3>
                <p>Urgent need for new FOB installation</p>
              </div>
              <div className="category-info yellow">
                <h3>Yellow Zones</h3>
                <p>Moderate requirement - needs further analysis</p>
              </div>
              <div className="category-info green">
                <h3>Green Zones</h3>
                <p>No immediate need for FOB</p>
              </div>
            </div>

            <div className="zones-list">
              <h2>Zone Analysis</h2>
              <table className="zones-table">
                <thead>
                  <tr>
                    <th>Zone Name</th>
                    <th>Category</th>
                    <th>Complaints</th>
                    <th>Pedestrian Count</th>
                    <th>Last Survey</th>
                    <th>Priority</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {zones.map(zone => (
                    <tr key={zone.id} className={`zone-${zone.category}`}>
                      <td>{zone.name}</td>
                      <td>
                        <span className={`zone-badge ${zone.category}`}>
                          {zone.category.toUpperCase()}
                        </span>
                      </td>
                      <td>{zone.complaints}</td>
                      <td>{zone.pedestrianCount}</td>
                      <td>{zone.lastSurveyDate}</td>
                      <td>{zone.priority}</td>
                      <td>
                        <select
                          value={zone.category}
                          onChange={(e) => handleZoneUpdate(zone.id, e.target.value)}
                          className="category-select"
                        >
                          <option value="red">Red</option>
                          <option value="yellow">Yellow</option>
                          <option value="green">Green</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="zone-map">
              <h2>Zone Visualization</h2>
              <div className="map-placeholder">
                {/* In a real app, this would be an interactive map */}
                <div className="map-legend">
                  <div><span className="legend-red"></span> Red Zones</div>
                  <div><span className="legend-yellow"></span> Yellow Zones</div>
                  <div><span className="legend-green"></span> Green Zones</div>
                </div>
                <p>Interactive map visualization would appear here</p>
              </div>
            </div>
          </div>
        )}

        {/* New Traffic Camera Integration Section */}
        {activeSection === "traffic-cameras" && (
          <div className="traffic-cameras-section">
            <h1 className="section-heading">Traffic Camera Monitoring</h1>
            
            <div className="camera-layout">
              <div className="camera-list">
                <h2>Available Cameras</h2>
                <ul>
                  {cameras.map(camera => (
                    <li 
                      key={camera.id} 
                      className={`camera-item ${camera.status} ${selectedCamera?.id === camera.id ? 'selected' : ''}`}
                      onClick={() => handleCameraSelect(camera)}
                    >
                      <h3>{camera.location}</h3>
                      <p>Status: {camera.status}</p>
                      <p>Last violation: {camera.lastViolation}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="camera-view">
                {selectedCamera ? (
                  <>
                    <h2>{selectedCamera.location}</h2>
                    <div className="live-feed">
                      <div className="feed-placeholder">
                        <p>Live feed from {selectedCamera.liveFeed}</p>
                        {/* In a real app, this would show actual camera feed */}
                      </div>
                      <div className="camera-controls">
                        <button className="control-button">Zoom In</button>
                        <button className="control-button">Zoom Out</button>
                        <button className="control-button">Capture</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>Select a camera to view live feed</p>
                )}
              </div>
            </div>

            <div className="violations-list">
              <h2>Recent Violations</h2>
              {violations.length > 0 ? (
                <table className="violations-table">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Location</th>
                      <th>Violation Type</th>
                      <th>Image</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {violations.map(violation => {
                      const camera = cameras.find(c => c.id === violation.cameraId);
                      return (
                        <tr key={violation.id}>
                          <td>{violation.timestamp}</td>
                          <td>{camera?.location || 'Unknown'}</td>
                          <td>{violation.type}</td>
                          <td>
                            <div className="violation-image">
                              {/* In a real app, this would show the actual image */}
                              <img src={`/violations/${violation.image}`} alt="Violation" />
                            </div>
                          </td>
                          <td>
                            <span className={`status-badge ${violation.status}`}>
                              {violation.status}
                            </span>
                          </td>
                          <td>
                            {violation.status === "unresolved" && (
                              <button
                                onClick={() => handleResolveViolation(violation.id)}
                                className="action-button resolve"
                              >
                                Resolve
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <p>No violations recorded today</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;