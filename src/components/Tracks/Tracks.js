import React from 'react'

export default function Tracks() {
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
                            <audio controls src="./assets/audio/jam_bubble_band_-_dreems.mp3">
                                 Your browser does not support the
                            <code>audio</code> element.
                             </audio>

                        </figure>
                        <figure>
                            <figcaption>King Size Johns</figcaption>
                            <audio controls src="./assets/audio/jam_bubble_band_-_king_size_johns.mp3">
                                 Your browser does not support the
                            <code>audio</code> element.
                             </audio>

                        </figure>
                        <figure>
                            <figcaption>Sny</figcaption>
                            <audio controls src="./assets/audio/jam_bubble_band_-_sni_mastering_sergej_galamaga.mp3">
                                 Your browser does not support the
                            <code>audio</code> element.
                             </audio>
                        </figure>
                        <figure>
                            <figcaption>Sorry</figcaption>
                            <audio controls src="./assets/audio/jam_bubble_band_-_sorry.mp3">
                                 Your browser does not support the
                            <code>audio</code> element.
                             </audio>
                        </figure>
                        <figure>
                            <figcaption>Tato Propav</figcaption>
                            <audio controls src="./assets/audio/jam_bubble_band_-_tato_popav.mp3">
                                 Your browser does not support the
                            <code>audio</code> element.
                             </audio>
                        </figure>
                    </div>
                </div>
            
            </section>
    )
}
