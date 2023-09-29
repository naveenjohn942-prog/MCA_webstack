import React, { useEffect, useState } from 'react';
import propertiesData from '/data/properties.json'; // Import local data
import styles from './PropertyList.module.css';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simulate API request by setting properties state with data from JSON file
    setProperties(propertiesData);
  }, []);

  return (
    <div className={styles.propertyListContainer}>
      <h2 className={styles.propertyListHeading}>Property List</h2>
      {properties.map((property) => (
        <div className={styles.propertyListItem} key={property.id}>
          <h3 className={styles.propertyName}>{property.name}</h3>
          <p className={styles.propertyInfo}>Location: {property.location}</p>
          <p className={styles.propertyInfo}>Price: ${property.price}</p>
          {/* Add more property details */}
          <a className={styles.propertyLink} href={`/property/${property.id}`}>
            View Details
          </a>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
