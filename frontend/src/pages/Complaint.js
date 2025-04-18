import React, { useState } from "react";
import "./Complaint.css"; // Import the CSS file

const Complaint = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    complaint: "",
    proof: null, // New state for proof file
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        proof: file,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.complaint) newErrors.complaint = "Complaint is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission (e.g., send data to backend)
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("subject", formData.subject);
      formPayload.append("complaint", formData.complaint);
      if (formData.proof) {
        formPayload.append("proof", formData.proof);
      }

      // Example: Log form data to console
      console.log("Form Data:", Object.fromEntries(formPayload));

      alert("Complaint submitted successfully!");
      setFormData({ name: "", email: "", subject: "", complaint: "", proof: null });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="complaint-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/" className="breadcrumb-link">
          Home
        </a>{" "}
        » <a href="/complaint" className="breadcrumb-link">Complaint</a> » Submit Complaint
      </div>

      {/* Page Heading */}
      <h1 className="page-heading">Submit a Complaint</h1>

      {/* Complaint Form */}
      <form onSubmit={handleSubmit} className="complaint-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? "error" : ""}`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? "error" : ""}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`form-input ${errors.subject ? "error" : ""}`}
            placeholder="Enter complaint subject"
          />
          {errors.subject && <p className="error-message">{errors.subject}</p>}
        </div>

        {/* Complaint Field */}
        <div className="form-group">
          <label htmlFor="complaint" className="form-label">
            Complaint
          </label>
          <textarea
            id="complaint"
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            className={`form-textarea ${errors.complaint ? "error" : ""}`}
            placeholder="Describe your complaint"
            rows="5"
          />
          {errors.complaint && <p className="error-message">{errors.complaint}</p>}
        </div>

        {/* Proof Section */}
        <div className="form-group">
          <label htmlFor="proof" className="form-label">
            Upload Proof (Optional)
          </label>
          <input
            type="file"
            id="proof"
            name="proof"
            onChange={handleFileChange}
            className="form-input"
            accept="image/*, .pdf, .doc, .docx"
          />
          <p className="file-hint">Supported formats: JPG, PNG, PDF, DOC, DOCX</p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submitt-button">
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default Complaint;