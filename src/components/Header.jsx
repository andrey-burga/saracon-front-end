import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import logoSa from "../assets/logoSa.png";
import "../styles/Header.css";
import Login from "../pages/Login";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ text, to, ariaLabel }) => (
  <li className="nav-item">
    <Link className="nav-link" to={to} aria-label={ariaLabel}>
      {text}
    </Link>
  </li>
);

const HeaderButton = ({ texto }) => <button type="button">{texto}</button>;

const Header = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const tipoUsuario = localStorage.getItem("tipoUsuario");

  const menuItems = [
    { text: "Inicio", to: "/" },

    /*{ text: "About", to: "/about" },    */
    /*{ text: "Contact", to: "/contact" },*/
  ];

  const handleLogout = () => {
    logout(); // Elimina sesión del contexto y localStorage
    navigate("/login"); // Redirecciona al login
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logoSa} alt="Logo de la empresa" />
      </div>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  text={item.text}
                  to={item.to}
                  ariaLabel={`${item.text} link`}
                />
              ))}
            </ul>

            <div className="header-buttons ms-auto">
              {isLoggedIn ? (
                <>
                  {tipoUsuario === "Persona Natural" && (
                    <Link to="/report" className="btn btn-primary">
                      Reportar
                    </Link>
                  )}
                  {tipoUsuario === "Empresa" && (
                    <Link to="/notifications" className="btn btn-primary">
                      Notificar
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="btn btn-primary ms-2"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-primary">
                    Iniciar sesión
                  </Link>
                  <Link to="/register" className="btn btn-primary ms-2">
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
