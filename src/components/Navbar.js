import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed-top">
      <div className="d-flex flex-column flex-md-row p-3 border-bottom bg-secondary text-white">
        <h4 className="mr-md-auto">
          <Link to="/" className="text-decoration-none text-white">
            BOOKS
          </Link>
        </h4>
        <nav className="btn-group ms-auto">
          <Link to="/" className="btn btn-light">
            Accueil
          </Link>
          <Link to="/Search" className="btn btn-light">
            Rechercher
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
