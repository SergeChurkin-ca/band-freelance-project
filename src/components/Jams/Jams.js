import React from "react";

export default function Jams() {
  return (
    <section id="jams" className="section-jams">
      <div className="content">
        <div className="albums-wrapper">
          <ul className="albums-container">
            <li className="text-wrapper">
              <h2>Our Jams</h2>
              <h3>
                Check out my latest live recordings. You can easily find them on
                YouTube and Vimeo as well
              </h3>
            </li>
            <li className="album-1">
              <img
                id="img-1" src="https://serge-web.com/bubblejamband/assets/images/1.jpg"
                alt="band fun on stage"
              />
              <h4>Slavytych, August 21st, 2021</h4>
            </li>
            <li className="album-2">
              <img
                id="img-2"
                src="https://serge-web.com/bubblejamband/assets/images/2.jpg"
                alt="very fron men with mike"
              />
              <h4>Kyiv, August 20st, 2021</h4>
            </li>
            <li className="album-3">
              <img
                id="img-3"
                src="https://serge-web.com/bubblejamband/assets/images/3.jpg"
                alt="festival night"
              />
              <h4>Chernihv, Red Square, July 1st, 2021</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="nextevent-wrapper">
        <h2>Next Event</h2>
        <h3>Buddka Bar, Chernihiv</h3>
        <h3>Agust 25th, 20:00</h3>
      </div>
    </section>
  );
}
