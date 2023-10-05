import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyCard from './PropertyCard';

export default function Search() {
  const url =
    'https://raw.githubusercontent.com/Punithify/punithify.github.io/main/properties.json';

  const [data, setData] = useState([]);
  const [searchItems, setSearchItems] = useState([]);

  const { slug } = useParams();

  const searchValue = () => {
    console.log(data);

    const filteredItems = data.filter(
      (property) =>
        property.name.toLowerCase().includes(slug.toLowerCase()) ||
        property.type.toLowerCase().includes(slug.toLowerCase())
    );
    setSearchItems(filteredItems);
  };

  useEffect(() => {
    async function makeRequest() {
      const res = await fetch(url);
      const data = await res.json();
      console.log('data', data);
      setData(data);
    }
    makeRequest();
    if (data.length != 0) {
      console.log('searchValue');
      searchValue();
    }
  }, []);
  // searchValue();

  // useEffect(() => {
  //   searchValue();
  // }, []);

  return (
    <div>
      {searchItems.length != 0 &&
        searchItems.map((property) => (
          <PropertyCard
            key={property.id}
            name={property.name}
            type={property.type}
          />
        ))}
      <div>{slug}</div>
    </div>
  );
}
