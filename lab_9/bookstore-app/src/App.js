
import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import ReviewForm from "./components/ReviewForm";
import booksData from "./books.json";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [reviews, setReviews] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = async () => {
    try {
      setIsLoading(true);
      setSearchResults(booksData); 
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching book data:', error);
      setIsLoading(false);
    }
  };

  const handleSubmitReview = (bookId, reviewText) => {
    const newReview = {
      text: reviewText,
    };

    setReviews((prevReviews) => ({
      ...prevReviews,
      [bookId]: [...(prevReviews[bookId] || []), newReview],
    }));
  };

  const handleSearch = (query) => {
    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  const memoizedSearchResults = useMemo(() => {
    return searchResults;
  }, [searchResults]);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>Online Bookstore</h1>
      <SearchBar onSearch={(query) => handleSearch(query)} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <BookList
            books={memoizedSearchResults}
            reviews={reviews}
            onSubmitReview={handleSubmitReview}
          />
          <ReviewForm onSubmit={handleSubmitReview} />
        </>
      )}
    </div>
  );
}

export default App;
