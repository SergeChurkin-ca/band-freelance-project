import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="stayintouch">
      <div className="text-wrapper">
        <h2>Get In Touch</h2>
        <h3>
          Feel free to contact us for more information about the upcoming events
          and other queries.
        </h3>
      </div>
      <form id="my-form" action="https://formspree.io/maypgnbq" method="POST">
        <div className="form-wrapper">
          <div className="input-wrapper">
            <div className="form-element">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name*"
                maxLength="40"
                required
              />
            </div>
            <div className="form-element">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Email Address*"
                maxLength="40"
                required
              />
            </div>
          </div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            maxLength="250"
            required
          ></textarea>

          <div className="button-container">
            <p id="my-form-status"></p>
            <button id="my-form-button" className="button-submit">
              <span className="text">Send Message</span>
            </button>
            <button type="reset" className="button-reset" id="button-reset">
              reset
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
