import React, { useState } from 'react';
import styles from './PropertySearch.css';

function PropertySearch({ onSearch }) {
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
  });

  const handleSearch = () => {
    onSearch(searchCriteria);
  };

  return (
    <div className={styles.propertySearch}>
      <h2>Property Search</h2>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          placeholder="Location"
          value={searchCriteria.location}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, location: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="priceRange">Price Range:</label>
        <input
          type="text"
          id="priceRange"
          placeholder="Price Range"
          value={searchCriteria.priceRange}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, priceRange: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="propertyType">Property Type:</label>
        <input
          type="text"
          id="propertyType"
          placeholder="Property Type"
          value={searchCriteria.propertyType}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, propertyType: e.target.value })}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default PropertySearch;
