import * as React from "react";
import { Navbar } from "react-bootstrap";
import { Outlet, Link, NavLink } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col xs-12">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/users" className="nav-link px-0 pe-4">
                      Users
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/photos" className="nav-link px-0 pe-4">
                      Photos
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
