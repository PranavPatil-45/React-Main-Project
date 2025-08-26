import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isAuth, setisAuth] = useState(localStorage.getItem("token"));

  const data = [
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/Product", text: "Product" },
    { id: 3, path: "/AddProduct", text: "Add Product" },
    { id: 4, path: "/Edit", text: "Edit" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-dark" to="/">
          🛒 MyShop
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {data.map((el) => (
              <li key={el.id} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active fw-bold text-white bg-dark rounded px-3"
                      : "nav-link text-dark fw-semibold px-3"
                  }
                  to={el.path}
                >
                  {el.text}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Auth Button */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "btn btn-dark fw-bold px-4"
                : "btn btn-outline-dark fw-bold px-4"
            }
            to="/login"
          >
            {!isAuth ? "Login" : "Logout"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
