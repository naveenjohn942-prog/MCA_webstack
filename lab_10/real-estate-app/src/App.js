import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertySearch from './components/PropertySearch';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import './App.css';

function App() {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    // Simulate loading property data from a JSON file
    fetch('./data/properties.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((data) => {
        setAllProperties(data);
      })
      .catch((error) => {
        console.error('Error loading property data:', error);
      });
  }, []);

  const handleSearch = (searchCriteria) => {
    const { location, priceRange, propertyType } = searchCriteria;

    const filtered = allProperties.filter((property) => {
      const matchesLocation =
        !location || property.location.toLowerCase().includes(location.toLowerCase());
      const matchesPriceRange =
        !priceRange || property.priceRange.toLowerCase().includes(priceRange.toLowerCase());
      const matchesPropertyType =
        !propertyType || property.propertyType.toLowerCase().includes(propertyType.toLowerCase());

      return matchesLocation && matchesPriceRange && matchesPropertyType;
    });

    setFilteredProperties(filtered);
  };

  return (
    <Router>
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
