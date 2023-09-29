import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Simulate API request by importing data from the property detail JSON file
    import(`../../public/data/propertyDetails/property${id}.json`)
      .then((module) => setProperty(module.default))
      .catch((error) => {
        console.error('Error loading property details:', error);
      });
  }, [id]);

  return (
    <div>
      {property ? (
        <div>
          <h2>Property Detail</h2>
          <h3>{property.name}</h3>
          <p>Location: {property.location}</p>
          <p>Price: ${property.price}</p>
          {/* Add more property details */}
          <button>Contact Agent</button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default PropertyDetail;
