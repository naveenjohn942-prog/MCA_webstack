import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PropertySearch from './components/PropertySearch';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import './App.css';
import ReactDOM from 'react-dom';

const navStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  margin: '0 20px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
};

function Nav() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="#" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="#" style={linkStyle}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const res = await fetch('/public/data/properties.json', {
        headers: {
          'Content-Type': 'application/json',
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
        <Route path="/about" element={<About />} /> {/* Add a route for the About page */}
      </Routes>
    </Router>
  );
}
export default App;
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page content.</p>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Use root.render to render your App component
root.render(<App />);
