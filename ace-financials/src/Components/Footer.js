import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LinkIcon from '@material-ui/icons/Link';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__contentLeft">
          <h4>Products -</h4>
            <h5> <Link className="fotter__sublink" to="/hotels"><LinkIcon style={{ marginRight: 10}}/>ACE Financils for Hotels</Link></h5>
            <h5> <Link className="fotter__sublink" to="/manufacturing"><LinkIcon style={{ marginRight: 10}}/>ACE Financials for Manufacturing</Link></h5>
            <h5> <Link className="fotter__sublink" to="/payroll_hr"><LinkIcon style={{ marginRight: 10}}/>ACE Payroll and HR</Link></h5>
            <h5> <Link className="fotter__sublink" to="/fixed_assets"><LinkIcon style={{ marginRight: 10}}/>ACE Fiexed Assets</Link></h5>
            <h5> <Link className="fotter__sublink" to="/loyalty"><LinkIcon style={{ marginRight: 10}}/>ACE Loyality</Link></h5>
            <h5> <Link className="fotter__sublink" to="/analytics"><LinkIcon style={{ marginRight: 10}}/>ACE Analytics</Link></h5>

          <h4><Link className="fotter__link" to="/services"><LinkIcon style={{ marginRight: 10}}/>Services</Link></h4>
          <h4><Link className="fotter__link" to="/partnership"><LinkIcon style={{ marginRight: 10}}/>Partnership</Link></h4>
        </div>
        <div className="footer__contentRight">
          <h4><Link className="fotter__link" to="/company"><LinkIcon style={{ marginRight: 10}}/>About Us</Link></h4>

          <h4><Link className="fotter__link" to="/company"><LinkIcon style={{ marginRight: 10}}/>Careers</Link></h4>

          <h4>Contact Us - </h4>
            <h5><a href="tel:+971501647438"> +971-50-164-7438</a></h5>
            <h5><Link to="/contact">click here</Link> to get more contact info</h5>
          <h4>Clients -</h4>
            <h5><Link className="fotter__sublink" to="/customers"><LinkIcon style={{ marginRight: 10}}/>Middle East</Link></h5>
            <h5><Link className="fotter__sublink" to="/customers"><LinkIcon style={{ marginRight: 10}}/>India</Link></h5>
        </div>
      </div>
      <div className="footer__bottom">
        <h3>Copyright © 1998 - 2013 Sunshine Systems.</h3>
      </div>
    </div>
  );
}

export default Footer;
