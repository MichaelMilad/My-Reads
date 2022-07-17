import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Book = ({ book, updateBook }) => {
  const imgUrl = book.imageLinks ? book.imageLinks.thumbnail : '';

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imgUrl})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf ? book.shelf : 'none'}
              onChange={(e) => updateBook(book, e.target.value)}
            >
              <option value="xxx" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.map((author) => author) : ''}
        </div>
      </div>
      <Link to={`book?id=${book.id}`}>details</Link>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired,
};

export default Book;
