import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/" className="breadcrumb-link">Home</a> »{" "}
        <a href="/about" className="breadcrumb-link">About us</a> » About us
      </div>

      {/* Main Heading */}
      <h1 className="main-heading">About us</h1>

      {/* MoRTH All Portals Section */}
      <section className="section">
        <h2 className="section-heading">MoRTH All Portals</h2>
        <ul className="section-list">
          <li><a href="/mission-vision" className="section-link">Mission / Vision</a></li>
          <li><a href="/whos-who" className="section-link">Who’s who</a></li>
          <li><a href="/organization-history" className="section-link">Organization History</a></li>
          <li><a href="/allocation-of-business" className="section-link">Allocation of Business</a></li>
          <li><a href="/wings-divisions" className="section-link">Wings / Divisions</a></li>
          <li><a href="/organisation-chart" className="section-link">Organisation Chart</a></li>
          <li><a href="/citizen-charter" className="section-link">Citizen Charter</a></li>
          <li><a href="/induction-material" className="section-link">Induction Material</a></li>
          <li><a href="/channel-of-submission" className="section-link">Channel of Submission of Files in MoRTH</a></li>
          <li><a href="/autonomous-bodies" className="section-link">Autonomous Bodies / Societies / Public Sector Undertakings</a></li>
          <li><a href="/related-organizations" className="section-link">Related Organizations</a></li>
        </ul>
      </section>

      {/* Description Section */}
      <section className="section">
        <p className="description-text">
          An apex organisation under the Central Government, is entrusted with the task of formulating and administering, in consultation with other Central Ministries/Departments, State Governments/UT Administrations, organisations and individuals, policies for Road Transport, National Highways and Transport Research with a view to increasing the mobility and efficiency of the road transport system in the country. The Ministry has two wings: <strong className="bold-text">Roads wing</strong> and <strong className="bold-text">Transport wing</strong>.
        </p>
      </section>

      {/* Road Wing Section */}
      <section className="section">
        <h2 className="section-heading">Road Wing</h2>
        <p className="description-text">Deals with development and maintenance of National Highways in the country.</p>
        <h3 className="sub-heading">Main Responsibilities:</h3>
        <ul className="section-list">
          <li>Planning, development and maintenance of National Highways in the country.</li>
          <li>Extends technical and financial support to State Governments for the development of state roads and the roads of inter-state connectivity and economic importance.</li>
          <li>Evolves standard specifications for roads and bridges in the country.</li>
          <li>Serves as a repository of technical knowledge on roads and bridges.</li>
        </ul>
      </section>

      {/* Transport Wing Section */}
      <section className="section">
        <h2 className="section-heading">Transport Wing</h2>
        <p className="description-text">Deals with matters relating to Road Transport.</p>
        <h3 className="sub-heading">Main Responsibilities:</h3>
        <ul className="section-list">
          <li>Motor Vehicle legislation.</li>
          <li>Administration of the Motor Vehicles Act, 1988.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;