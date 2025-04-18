import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./NearestFOB.css"; // Import the CSS file

// Google Maps API Key
const API_KEY = "AIzaSyBwH05PSHVy2XmPH2uA6Pr_Dg0CorsCQEw";

// Map container style
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Default center (can be dynamically set to the user's location)
const defaultCenter = {
  lat: 28.6139, // Default to New Delhi coordinates
  lng: 77.2090,
};

// Nearest FOB locations (example data)
const fobLocations = [
  { id: 1, name: "FOB 1", lat: 28.6139, lng: 77.2090 },
  { id: 2, name: "FOB 2", lat: 28.6145, lng: 77.2100 },
  { id: 3, name: "FOB 3", lat: 28.6150, lng: 77.2110 },
  { id: 4, name: "FOB 4", lat: 28.6160, lng: 77.2120 },
  { id: 5, name: "FOB 5", lat: 28.6170, lng: 77.2130 },
];

// Haversine formula to calculate distance between two coordinates
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const NearestFOB = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [showMap, setShowMap] = useState(false);
  const [nearestFOB, setNearestFOB] = useState(null);
  const [sortedFOBs, setSortedFOBs] = useState([]);

  // Load Google Maps script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setMapCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Handle click to show map and find nearest FOB
  const handleShowMap = () => {
    if (userLocation) {
      // Calculate distances and sort FOBs
      const fobsWithDistance = fobLocations.map((fob) => ({
        ...fob,
        distance: calculateDistance(
          userLocation.lat,
          userLocation.lng,
          fob.lat,
          fob.lng
        ),
      }));
      const sorted = fobsWithDistance.sort((a, b) => a.distance - b.distance);
      setSortedFOBs(sorted);
      setNearestFOB(sorted[0]); // Set the nearest FOB
      setShowMap(true);
    } else {
      alert("Please allow access to your location to find the nearest FOB.");
    }
  };

  if (loadError) return <div className="error-message">Error loading maps</div>;
  if (!isLoaded) return <div className="loading-message">Loading Maps...</div>;

  return (
    <div className="nearest-fob-container">
      {/* Section Heading */}
      <h2 className="section-heading">Nearest FOB</h2>

      {/* Description */}
      <p className="description-text">
        Click the button below to find the nearest Field Office Branches (FOBs) around you.
      </p>

      {/* Show Map Button */}
      <button onClick={handleShowMap} className="show-map-button">
        Find Nearest FOB
      </button>

      {/* Nearest FOB Details */}
      {nearestFOB && (
        <div className="nearest-fob-details">
          <h3 className="nearest-fob-heading">Nearest FOB:</h3>
          <p>
            <strong>Name:</strong> {nearestFOB.name}
          </p>
          <p>
            <strong>Distance:</strong> {nearestFOB.distance.toFixed(2)} km
          </p>
        </div>
      )}

      {/* Google Map */}
      {showMap && (
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={mapCenter}
          >
            {/* User Location Marker */}
            {userLocation && (
              <Marker
                position={userLocation}
                label="You"
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                }}
              />
            )}

            {/* FOB Location Markers */}
            {sortedFOBs.map((fob) => (
              <Marker
                key={fob.id}
                position={{ lat: fob.lat, lng: fob.lng }}
                label={fob.name}
              />
            ))}
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default NearestFOB;