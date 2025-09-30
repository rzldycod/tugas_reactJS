import books from "../utils/books";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Lord of the Rings: The Return of the King
            </h1>
            <br />
            <p className="lead" style={{ textAlign: 'justify', lineHeight: '1.2', letterSpacing: '0px' }}>
              The adventure continues in the final installment of the epic fantasy trilogy, where the fate of Middle-earth hangs in the balance as Frodo and Sam make their perilous journey to destroy the One Ring.
            </p>
            <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Buy Now
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Details
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://m.media-amazon.com/images/I/81krXXdKn2L._UF1000,1000_QL80_.jpg"
              width={390}
              alt="Lord of the Rings Book"
            />
          </div>
        </div>
      </div>

      {/* Book List Section */}
<div className="album py-5 bg-light">
  <div className="container">
     <h3 className="mb-4">Featured Books</h3>
    <div className="row">
      {books.slice(0, 6).map((book) => (
        <div className="col-md-4 mb-4" key={book.id}>
          <div className="card h-100 shadow-sm">
            <img
              src={book.image}
              className="card-img-top"
              alt={book.title}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{book.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
              <p className="card-text">{book.description}</p>
              <br />
              <div className="mt-auto d-flex justify-content-between">
                <button className="btn btn-sm btn-primary">View</button>
                <button className="btn btn-sm btn-outline-secondary">Buy</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    </>
  );
}