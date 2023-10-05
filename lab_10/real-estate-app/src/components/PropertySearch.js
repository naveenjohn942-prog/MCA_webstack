import React, { useState } from 'react';
import styles from './PropertySearch.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="row">
        <div className="col-md-6"> 
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={searchCriteria.location}
            onChange={(e) => setSearchCriteria({ ...searchCriteria, location: e.target.value })}
          />
        </div>
        <div className="col-md-6"> {/* Use col-md-6 to make it medium width */}
          <label htmlFor="priceRange">Price Range:</label>
          <input
            type="text"
            id="priceRange"
            placeholder="Price Range"
            value={searchCriteria.priceRange}
            onChange={(e) => setSearchCriteria({ ...searchCriteria, priceRange: e.target.value })}
          />
        </div>
      </div>
      <div className="button"><button onClick={handleSearch}>Search</button></div>
      
    </div>
  );
}

export default PropertySearch;
