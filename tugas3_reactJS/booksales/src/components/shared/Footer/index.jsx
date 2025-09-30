import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-top py-3 mt-4 bg-white">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <Link to="/" className="me-2 text-body-secondary text-decoration-none lh-1" aria-label="Home">
            <i className="bi bi-bootstrap" style={{ fontSize: '30px' }}></i>
          </Link>
          <span className="text-body-secondary">&copy; 2025 NF Academy</span>
        </div>
        <ul className="nav list-unstyled d-flex gap-3 mb-0">
          <li>
            <a className="text-body-secondary" href="https://www.instagram.com/nfacademy_id/" target="blank" aria-label="Instagram">
              <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
            </a>
          </li>
          <li>
            <a className="text-body-secondary" href="https://www.facebook.com/NFAcademyid/?locale=id_ID" target="blank" aria-label="Facebook">
              <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
