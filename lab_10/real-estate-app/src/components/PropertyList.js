import React, { useEffect, useState } from 'react';
import styles from './PropertyList.module.css';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  const apiUrl = `${process.env.PUBLIC_URL}/data/properties.json`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => {
        console.error('Error loading property data:', error);
      });
  }, [apiUrl]);

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
