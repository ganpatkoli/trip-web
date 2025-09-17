import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="wrapper style2">
      <div className="inner">
        <header className="align-center">
          <h2>Contact Us</h2>
        </header>
        <form method="post" action="#">
          <div className="row uniform">
            <div className="6u 12u$(xsmall)">
              <input type="text" name="name" placeholder="Your Name" />
            </div>
            <div className="6u$ 12u$(xsmall)">
              <input type="email" name="email" placeholder="Your Email" />
            </div>
            <div className="12u$">
              <textarea name="message" placeholder="Your Message" rows="6" />
            </div>
            <div className="12u$">
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
