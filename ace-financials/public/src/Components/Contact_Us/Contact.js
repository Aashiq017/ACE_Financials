import React from "react";
import "./Contact.css";
import { useDispatch } from "react-redux";
import { setLoc } from "../../Features/Navigation/NavigationSlice";
import { Divider } from "@material-ui/core";

function Contact() {
  const dispatch = useDispatch();

  const Loc = "support";

  dispatch(setLoc(Loc));

  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <div className="contact__det">
        <div className="contact__detBox">
          <h2>ACE Corporate Headquarters:</h2>
          <div id="contact_line"></div>
          <h3>Sunshine Systems LLC</h3>
          <h5>P.O.Box:43700, MEZ/3 Office</h5>
          <h5>4,Awadh Building, </h5>
          <div className="space" />
          <h5>Hor Al Anz, Dubai</h5>
          <h5>United Arab Emirates</h5>
          <div id="contact_line"></div>
          <h4>Telephone:</h4>
          <h5>
            <a href="tel:+971501647438">+971 50 164 7438</a>
          </h5>
          <div id="contact_line"></div>
          <h4>Sales:</h4>
          <h5>
            <a href="tel:+971501647438">+971 50 164 7438</a>
          </h5>
          <div id="contact_line"></div>
          <h4>E-mail:</h4>
          <h5>
            <a href="mailto:srarul@acefinancials.com?">
              srarul@acefinancials.com
            </a>
          </h5>
        </div>
        <div className="contact__detBox">
          <h2>ACE India Office:</h2>
          <div id="contact_line"></div>
          <h3>Sunshine Systems and Software Solutions</h3>
          <h5>3419, LIG – II, TNHB, Avadi,</h5>
          <h5>Chennai – 600054,</h5>
          <h5>TamilNadu, India</h5>
          <div id="contact_line"></div>
          <h4>Telephone:</h4>
          <h5>
            <a href="tel:+914426553338">+91 44 2655 3338</a>
          </h5>
          <h5>
            <a href="tel:+914464575351">+91 44 6457 5351</a>
          </h5>
          <div id="contact_line"></div>
          <h4>E-mail:</h4>
          <h5>
            <a href="mailto:info@acefinancials.com?">info@acefinancials.com</a>
          </h5>
        </div>
        <div className="contact__detBox">
          <h2>ACE US Office:</h2>
          <div id="contact_line"></div>
          <h3>ACE Financials</h3>
          <h5>1848 Oak Hammock ct,</h5>
          <h5>Tampa, Florida – 33558. USA</h5>
          <div id="contact_line"></div>
          <h4>Telephone:</h4>
          <h5>
            <a href="tel:+17276984560">+1 727 698 4560</a>
          </h5>
          <div id="contact_line"></div>
          <h4>E-mail:</h4>
          <h5>
            <a href="mailto:dilleeps@acefinancials.com?">
              dilleeps@acefinancials.com
            </a>
          </h5>
        </div>
        <div className="contact__detBox">
          <h2>ACE Maldives Office:</h2>
          <div id="contact_line"></div>
          <h3>Sunshine Systems Pvt.Ltd.</h3>
          <h5>H.Thoddooge,</h5>
          <h5>Abadhah Ufaa Higun,</h5>
          <h5>K. Male, Maldives</h5>
          <div id="contact_line"></div>
          <h4>E-mail:</h4>
          <h5>
            <a href="mailto:info@acefinancials.com?">info@acefinancials.com</a>
          </h5>
        </div>
      </div>
      <div className="contact__end">
        <div className="contact__endHead">
          <h2>Have a ACE Product Specialist Contact You Today!</h2>
          <div id="contact_line"></div>
        </div>
        <div className="contact__endBody">
          <h3>
            Learn how ACE Financials can help you run your entire hotel business
            better.
          </h3>
          <br />
          <h3>
            Please provide us with your information so a ACE product specialist
            can help you determine whether ACE Financials is right for your
            hotel.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
