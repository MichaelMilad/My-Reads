import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

const MainPage = ({ books, updateBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {books.length && (
          <div>
            <BookShelf
              title="Currently Reading"
              shelfName="currentlyReading"
              books={books}
              updateBook={updateBook}
            />
            <BookShelf
              title="Want To Read"
              shelfName="wantToRead"
              books={books}
              updateBook={updateBook}
            />
            <BookShelf title="Read" shelfName="read" books={books} updateBook={updateBook} />
          </div>
        )}
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
