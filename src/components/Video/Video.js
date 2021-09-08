import React from "react";
import Events from "../UpcomingEvents/Events";
import videoThumbnail from "../../assets/images/video_thumbnail.png"
export default function Video() {
  return (
    <section id="video" className="ourvideo">
      <div className="content">
        <div className="text-wrapper">
          <h2>Our Latest Music Video</h2>
          <h3>
            Enjoy the latest music video of People. The video was created in
            2020 to support Band's fresh music album "Good Old Days"
          </h3>
        </div>
        <div className="video-wrapper">
          <video poster={videoThumbnail} controls>
            <source
              src="https://serge-web.com/bubblejamband/assets/videos/Jam_Bubble_band_1080p.mp4"
              type="video/mp4"
            />
            your browser does not support html5 video
          </video>
        </div>
      </div>

      <Events />
    </section>
  );
}
