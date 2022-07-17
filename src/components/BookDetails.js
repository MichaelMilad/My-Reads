const BookDetails = ({ books }) => {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');

  const book = books.filter((book) => book.id === id)[0];

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>Book Details</h1>
        </div>
        <div className="list-books-content">
          <div>
            <span>
              <strong>Book Title:</strong> {book.title ? book.title : 'No Title'}
            </span>
          </div>
          {book.subtitle && (
            <div>
              <span>
                <strong>Book Subtitle:</strong> {book.subtitle}
              </span>
            </div>
          )}
          <div>
            {book.authors.length > 1 ? (
              <ol>
                <strong>Book Authors: </strong>
                {book.authors &&
                  book.authors.map((author) => {
                    return (
                      <li key={author}>
                        <span>{author}</span>
                      </li>
                    );
                  })}
              </ol>
            ) : (
              <span>
                <strong>Book Author: </strong>
                {book.authors ? book.authors : 'Unknown'}
              </span>
            )}
          </div>

          <div>
            {book.categories && book.categories.length > 1 ? (
              <ol>
                <strong>Book Caregories: </strong>
                {book.categories.map((category) => {
                  return (
                    <li key={category}>
                      <span>{category}</span>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <span>
                <strong>Book Category: </strong>
                {book.categories}
              </span>
            )}
          </div>

          {book.contentVersion && (
            <div>
              <span>
                <strong>Content Version:</strong> {book.contentVersion}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
