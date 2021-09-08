import React, { useEffect } from "react";
import News from "../News/News"
export default function Tracks() {

     
     // playing only one audio/video file at a time
  useEffect(() => {
    function onlyPlayOneIn(container) {
      container.addEventListener(
        "play",
        function (event) {
          const audio_elements = document.getElementsByTagName("audio");
          for (let i = 0; i < audio_elements.length; i++) {
            const audio_element = audio_elements[i];
            if (audio_element !== event.target) {
              audio_element.pause();
            }
          }
        },
        true
      );
    }
    document.addEventListener("DOMContentLoaded", function () {
      onlyPlayOneIn(document.body);
    });
  });

  return (
    <section id="tracks" className="tracks">
      <div className="content">
        <div className="text-wrapper">
          <h2>Popular tracks</h2>
          <h3>Here are our the most inspiring compositions</h3>
        </div>
        <div className="audio-wrapper">
          <figure>
            <figcaption>Dream</figcaption>
            <audio
              controls
              src="https://serge-web.com/bubblejamband/assets/audio/jam_bubble_band_-_dreems.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
          <figure>
            <figcaption>King Size Johns</figcaption>
            <audio
              controls
              src="https://serge-web.com/bubblejamband/assets/audio/jam_bubble_band_-_king_size_johns.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
          <figure>
            <figcaption>Sny</figcaption>
            <audio
              controls
              src="https://serge-web.com/bubblejamband/assets/audio/jam_bubble_band_-_sni_mastering_sergej_galamaga.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
          <figure>
            <figcaption>Sorry</figcaption>
            <audio
              controls
              src="https://serge-web.com/bubblejamband/assets/audio/jam_bubble_band_-_sorry.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
          <figure>
            <figcaption>Tato Propav</figcaption>
            <audio
              controls
              src="https://serge-web.com/bubblejamband/assets/audio/jam_bubble_band_-_tato_popav.mp3"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </figure>
        </div>
      </div>
      <News/>
    </section>
  );
}
