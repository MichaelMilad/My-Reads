import Book from './Book';

const BookShelf = ({ title, books, shelfName, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              book.shelf === shelfName && <Book book={book} key={book.id} updateBook={updateBook} />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
