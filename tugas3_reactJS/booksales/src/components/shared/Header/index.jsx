import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-3 mb-4 border-bottom bg-white">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
          <span className="ms-2 fs-4 fw-bold">bookstore</span>
        </Link>

        <ul className="nav nav-pills mx-4 flex-grow-1 justify-content-center gap-2">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/books" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Books</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/team" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Team</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contacts</NavLink>
          </li>
        </ul>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-outline-primary">Login</button>
          <button type="button" className="btn btn-primary">Register</button>
        </div>
      </div>
    </header>
  );
}
