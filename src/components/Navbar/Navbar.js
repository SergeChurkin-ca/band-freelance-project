import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <input type="checkbox" id="toggle" className="toggle" name="toggle" />
        <i className="fa fa-bars"></i>
        <i className="fa fa-times"></i>

           <ul>
                <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="#jams">our jams</a>
                </li>
                <li>
                    <a href="#video">video</a>
                </li>
                <li>
                    <a href="#upcomingevents">upcoming events</a>
                </li>
                <li>
                    <a href="#tracks">tracks</a>
                </li>
                <li>
                    <a href="#news">news</a>
                </li>

                <li><a href="#contact">contact</a></li>
            </ul>
      </nav>
    </div>
  );
}
