import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext"; 

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Pizzería Mamma Mía!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="btn btn-link text-white text-decoration-none">🍕 Home</Link>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="btn btn-link text-white text-decoration-none">🔓 Profile</Link>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-link text-white text-decoration-none">🔒 Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="btn btn-link text-white text-decoration-none">🔐 Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="btn btn-link text-white text-decoration-none">🔐 Register</Link>
                </li>
              </>
            )}
          </ul>
          
          <div className="d-flex">
            <Link to="/cart" className="btn btn-outline-info">
              🛒 Total: ${total ? total.toLocaleString() : '0'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;