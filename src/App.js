import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchPage from './components/SearchPage';
import MainPage from './components/MainPage';
import BookDetails from './components/BookDetails';

function App() {
  const [books, setBooks] = useState([]);

  //A state that triggers updating
  const [change, setChange] = useState(true);

  useEffect(() => {
    BooksAPI.getAll()
      .then((response) => setBooks(response))
      .catch((e) => console.log(e));
  }, [change]);

  const updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => setChange(!change))
      .catch((e) => console.log(e));
  };

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<MainPage books={books} updateBook={updateBook} />} />
        <Route path="/search" element={<SearchPage updateBook={updateBook} books={books} />} />
        <Route path="/book" element={<BookDetails books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
