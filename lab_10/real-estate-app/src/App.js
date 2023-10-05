import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PropertySearch from './components/PropertySearch';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import './App.css';
import ReactDOM from 'react-dom';

// Modify the Nav component with CSS styles
function Nav() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

// Define CSS styles
const navStyle = {
  backgroundColor: '#333',      // Background color of the navigation bar
  padding: '10px 0',            // Padding at the top and bottom
};

const ulStyle = {
  listStyleType: 'none',        // Remove bullet points from the list
  margin: 0,                    // Remove default margin
  padding: 0,                   // Remove default padding
  display: 'flex',              // Display list items in a row
  justifyContent: 'center',     // Center align list items horizontally
};

const liStyle = {
  margin: '0 20px',             // Add margin between list items
};

const linkStyle = {
  color: '#fff',                // Text color of the links
  textDecoration: 'none',      // Remove underline from links
  fontSize: '18px',             // Font size of the links
};


function App() {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const res = await fetch('/public/data/properties.json', {
        headers: {
          'content-Type': 'application/json',
        },
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      setAllProperties(data);
    }
    fetchProperties();
  }, []);

  const handleSearch = (searchCriteria) => {
    const { location, price, propertyType } = searchCriteria;

    const filtered = allProperties.filter((property) => {
      const matchesLocation =
        !location || property.location.toLowerCase().includes(location.toLowerCase());
      const matchesPrice = !price || property.price === price;
      const matchesPropertyType =
        !propertyType || property.propertyType.toLowerCase().includes(propertyType.toLowerCase());

      return matchesLocation && matchesPrice && matchesPropertyType;
    });

    setFilteredProperties(filtered);
  };

  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <PropertySearch onSearch={handleSearch} />
              <PropertyList properties={filteredProperties} />
            </div>
          }
        />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Use root.render to render your App component
root.render(<App />);
