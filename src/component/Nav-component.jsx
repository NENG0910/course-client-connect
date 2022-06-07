import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout successfully.");
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Course
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {!currentUser && (
                <div className="d-flex flex-row">
                  <li className="nav-item">
                    <a className="nav-link" href="/api/user/register">
                      Register
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/api/user/login">
                      Login
                    </a>
                  </li>
                </div>
              )}

              {currentUser && (
                <div className="d-flex flex-row">
                  <li className="nav-item">
                    <a onClick={handleLogout} className="nav-link" href="/#">
                      Logout
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/api/user/profile">
                      Profile
                    </a>
                  </li>
                </div>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
