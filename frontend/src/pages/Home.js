import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

const Home = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [district, setDistrict] = useState("Loading...");

  // Fetch user's live location and district
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });

          // Fetch district name using reverse geocoding (example using OpenStreetMap Nominatim API)
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setDistrict(data.address.city || data.address.town || data.address.village || "Unknown");
          } catch (error) {
            console.error("Error fetching district:", error);
            setDistrict("Unknown");
          }
        },
        (error) => {
          console.error("Error fetching location:", error);
          setDistrict("Unknown");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setDistrict("Unknown");
    }
  }, []);

  // Sample data for notices and ongoing projects
  const notices = [
    { id: 1, title: "Notice 1", content: "This is the first notice." },
    { id: 2, title: "Notice 2", content: "This is the second notice." },
  ];

  const ongoingProjects = [
    { id: 1, name: "FOB Project A", location: "Location A", progress: "50%" },
    { id: 2, name: "FOB Project B", location: "Location B", progress: "30%" },
  ];

  return (
    <div>
      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img
              src="https://nhai.gov.in/nhai/sites/default/files/2025-02/Delhi-Katra-Section.jpg"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://nhai.gov.in/nhai/sites/default/files/2024-12/Delhi-Section-of-6-lane-Delhi-Dehradun-Access-Controlled-Economic-Corridor_0.jpg"
              alt="Slide 3"
            />
          </div>
          <div>
            <img
              src="https://cbpssubscriber.mygov.in/assets/uploads/3rpbtfC38B9muoRQ"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://nhai.gov.in/nhai/sites/default/files/2024-09/8_1_1_banner3_Hindi_1_0.jpg"
              alt="Slide 4"
            />
          </div>
          <div>
            <img
              src="https://nhai.gov.in/nhai/sites/default/files/2025-02/Delhi-Katra-Section.jpg"
              alt="Slide 5"
            />
          </div>
          <div>
            <img
              src="https://nhai.gov.in/nhai/sites/default/files/2024-12/Rewa-Siddhi-tunnel-in-MP.jpg"
              alt="Slide 6"
            />
          </div>
        </Carousel>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <h2>
          Bridging the Gap SKY <span className="highlight">WALK</span> by NHAI
        </h2>
        <p>
          Revolutionizing Foot Over Bridges into Intelligent, Safe, and Sustainable
          Pathways for Urban Mobility.
        </p>
        <div className="buttons">
          <button className="primary-button">Daily Activity</button>
          <a href="#">Learn More →</a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-box">
          <span className="stat-value">1900 +</span>
          <p>Operational FOB's</p>
        </div>
        <div className="stat-box">
          <span className="stat-value">550 +</span>
          <p>Under Construction</p>
        </div>
        <div className="stat-box">
          <span className="stat-value">131 +</span>
          <p>Passed by NHAI</p>
        </div>
      </section>

 {/* Cards Section */}
<section className="cards-section">
  {/* Notices and Public Announcements Card */}
  <div className="card notices-card">
    <h3>Notices and Public Announcements</h3>
    <ul>
      {notices.map((notice) => (
        <li key={notice.id}>
          <strong>{notice.title}:</strong> {notice.content}
        </li>
      ))}
    </ul>
  </div>

  {/* Ongoing FOB Projects Card */}
  <div className="card projects-card">
    <h3>Ongoing FOB Projects in {district}</h3>
    <ul>
      {ongoingProjects.map((project) => (
        <li key={project.id}>
          <strong>{project.name}</strong> - {project.location}
          <span>{project.progress} completed</span>
        </li>
      ))}
    </ul>
  </div>
</section>

      {/* Social Media Icons Box */}
      <div className="social-media-box">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;