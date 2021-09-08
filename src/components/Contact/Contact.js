import React, {useEffect} from "react";

export default function Contact() {

  useEffect(() => {
  window.addEventListener("DOMContentLoaded", function() {
    // get the form elements defined in your form HTML above

    let form = document.getElementById("my-form");
    let button = document.getElementById("my-form-button");
    let status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thank you for your message!";
        document.getElementById("button-reset").style.display = "none";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem. Please check your inputs.";
    }

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
})

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
