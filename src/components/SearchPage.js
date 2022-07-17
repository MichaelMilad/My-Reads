import { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from './Book';

const SearchPage = ({ setSearchPage, updateBook, books }) => {
  const [query, setQuery] = useState('');
  const [searchBooks, setSearchBooks] = useState([]);

  const updateQuery = (query) => {
    setQuery(query);
    search(query, 10)
      .then((foundBooks) => {
        if (!foundBooks) {
          setSearchBooks([]);
        }
        if (foundBooks) {
          const foundBooksWithShelves = foundBooks.map((foundBook) => {
            for (const book of books) {
              if (foundBook.id === book.id) {
                foundBook.shelf = book.shelf;
                break;
              }
            }
            return foundBook;
          });
          setSearchBooks(foundBooksWithShelves);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={setSearchPage}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.length ? (
            searchBooks.map((book) => {
              return <Book book={book} updateBook={updateBook} key={book.id} />;
            })
          ) : (
            <p>Nothing Found</p>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
