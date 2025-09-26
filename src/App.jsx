import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{color:"#74C0FC"}}></i>
            <span className="ms-2 fs-4">bookstore</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Books</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link">Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contacts</Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
              <i className="bi bi-bootstrap" style={{ fontSize: '30px' }}></i>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2025 NF Academy</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#" aria-label="Instagram">
                <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#" aria-label="Facebook">
                <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

export default App;