import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertySearch from './components/PropertySearch';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
 
  async function fetchProperties(){
    const res = await fetch('/data/properties.json',{
      headers:{
        'content-Type':'application/json',
      },

    });
    console.log(res);
    const data = await res.json();
    console.log(data);
    setAllProperties(data);
  }
  fetchProperties();
},[]);

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
    // console.log("working");
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
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Use root.render to render your App component
root.render(<App />);
