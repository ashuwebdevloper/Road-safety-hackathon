import React from "react";
import "./Media.css"; // Import the CSS file

const Media = () => {
  return (
    <div className="media-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="/" className="breadcrumb-link">Home</a> »{" "}
        <a href="/media" className="breadcrumb-link">Media</a> » NHAI in News
      </div>

      {/* Page Heading */}
      <h1 className="page-heading">NHAI IN NEWS</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-grid">
          {/* Select Year */}
          <div>
            <label className="filter-label">Select Year</label>
            <select className="filter-select">
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>

          {/* Select Month */}
          <div>
            <label className="filter-label">Select Month</label>
            <select className="filter-select">
              <option>March</option>
              <option>February</option>
              <option>January</option>
            </select>
          </div>

          {/* Verification Code */}
          <div>
            <label className="filter-label">Verification Code</label>
            <input
              type="text"
              className="filter-input"
              placeholder="Enter Code"
            />
          </div>

          {/* Search and Reset Buttons */}
          <div className="filter-buttons">
            <button className="search-button">Search</button>
            <button className="reset-button">Reset</button>
          </div>
        </div>
      </div>

      {/* Show on Page Dropdown */}
      <div className="show-on-page">
        <div className="show-on-page-label">Show on Page:</div>
        <select className="show-on-page-select">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
      </div>

      {/* News Table */}
      <div className="table-container">
        <table className="news-table">
          <thead>
            <tr>
              <th>SR. NO</th>
              <th>HEADLINE</th>
              <th>SOURCE</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>1</td>
              <td>Cheaper Toll for Regular NH Users Soon</td>
              <td>The Economic Times, Delhi</td>
              <td>20-03-2025</td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>2</td>
              <td>India's longest tunnel getting ready in Mukundra reserve</td>
              <td>The Times of India</td>
              <td>09-03-2025</td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>3</td>
              <td>NHAI cracks down on False' FASTag deduction</td>
              <td>The Times of India</td>
              <td>03-03-2025</td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td>4</td>
              <td>Every Rs. Spent on Highway Construction Leads to Rs. 3.21 Increase in GDP Growth</td>
              <td>The Economic Times</td>
              <td>28-01-2025</td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td>5</td>
              <td>Toll Mopup may top Rs. 70k crores in 2024</td>
              <td>The Economic Times, Delhi</td>
              <td>27-12-2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Media;