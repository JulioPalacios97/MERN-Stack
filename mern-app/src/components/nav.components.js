import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

export default class nav extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a
            className="navbar-brand"
            href="https://github.com/JulioPalacios97"
            target="blank"
          >
            <img
              src={Logo}
              width="30"
              height="30"
              alt="CodingTheSmartWay.com"
            />
          </a>
          <Link to="/" className="navbar-brand">
            MERN-Stack App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  List
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
