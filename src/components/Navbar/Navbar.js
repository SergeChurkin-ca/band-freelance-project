import React from "react";
import { Link } from "react-router-dom";
// import Jams from "../../components/Jams/Jams"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <i className="fa fa-bars"></i>
        <input type="checkbox" id="toggle" name="toggle" />

        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/ourjams">our jams</Link>
          </li>
          <li>
            <Link to="/video">video</Link>
          </li>
          <li>
            <Link to="/upcomingEvents">upcoming events</Link>
          </li>
          <li>
            <Link to="/tracks">news</Link>
          </li>
          <li>
            <Link to="/news">news</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
      
        </ul>
      </nav>
    </div>
  );
}
