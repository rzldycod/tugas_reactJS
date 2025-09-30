import { useState } from "react";
import initialBooks from "../utils/books";

export default function Books() {
  const [books, setBooks] = useState([...initialBooks]);

  // use state untuk form
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: ""
  });

  // update isi form tiap ketikan
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  // tambah buku baru
  function handleAddBook(e) {
    e.preventDefault();
    if (!form.title.trim()) return; // minimal judul ada

    const nextId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
    const newBook = {
      id: nextId,
      title: form.title,
      author: form.author,
      year: form.year,
      description: form.description,
      image: form.image 
    };

    setBooks(prev => [...prev, newBook]);
    setForm({ title: "", author: "", year: "", description: "", image: "" }); // reset form
  }

  return (
    <div className="container my-5">

      {/* Form penambahan buku */}
      <form onSubmit={handleAddBook} className="mb-5 border p-4 rounded shadow-sm bg-light">
        <h4 className="mb-3">Tambah Buku Baru</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Judul Buku"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Penulis"
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="Tahun"
            />
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="URL Gambar"
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              rows="2"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Deskripsi singkat"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Tambah Buku</button>
      </form>

      {/* Daftar buku */}
      <div className="row">
        <h1 className="mb-4 text-center">Book List</h1>
        {books.map(book => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{ height: 220, objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.author} • {book.year}
                </h6>
                <p className="card-text flex-grow-1">{book.description}</p>
                <br />
                <div className="mt-auto d-flex justify-content-between">
                  <button className="btn btn-sm btn-outline-secondary">Details</button>
                  <button className="btn btn-sm btn-primary">Buy</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
