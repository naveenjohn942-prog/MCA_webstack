import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function MyForm() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const searchVal = event.target.search.value;
    console.log(searchVal);
    //check for lee rob code
    if (!searchVal) {
      console.log('no search value');
      navigate('/');
      return;
    }
    // history.push(`/search/${searchParams}`);
    navigate(`/search/${searchParams.get('q')}`);
    console.log(searchVal);
    console.log(searchParams);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          //   defaultValue=""
          defaultValue={!searchParams.get('q') ? '' : searchParams.get('q')}
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />
        <button type="submit">search</button>
      </form>
    </>
  );
}
