export default function Books() {
  const books = [
    {
      id: 1,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      img: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
      desc: "The adventure of Bilbo Baggins in Middle-earth to reclaim a treasure guarded by a dragon."
    },
    {
      id: 2,
      title: "Harry Potter and the Sorcerer’s Stone",
      author: "J.K. Rowling",
      img: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg?width=200",
      desc: "The first book in the Harry Potter series, introducing the magical world."
    },
    {
      id: 3,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      img: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
      desc: "A mystery thriller that explores secret societies and hidden messages in art."
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Book List</h1>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={book.img}
                className="card-img-top"
                alt={book.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text">{book.desc}</p>
                <br />
                <div className="mt-auto">
                  <button className="btn btn-sm btn-primary me-2">Details</button>
                  <button className="btn btn-sm btn-outline-secondary">Buy</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}