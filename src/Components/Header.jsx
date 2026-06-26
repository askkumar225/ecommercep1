

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {

  const cartValue = useSelector(
    (state) => state.cart
  );

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "#081229",
        padding: "1px 0",
        boxShadow: "0 2px 20px rgba(0,0,0,0.2)"
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            color: "#ff9f1c",
            fontSize: "26px"
          }}
        >
          <i className="bi bi-shop me-2"></i>
          AK-ShopKart
        </Link>

        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item mx-2">
              <Link
                className="nav-link" to="/"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "400"
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "500"
                }}
              >
                About
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/products"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "500"
                }}
              >
                Products
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/cart"
                style={{
                  color: "#ff9f1c",
                  fontSize: "20px",
                  fontWeight: "600"
                }}
              >
                <i className="bi bi-cart3 me-1"></i>
                Cart ({cartValue.length})
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link" to="/contact"
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "500"
                }}
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};