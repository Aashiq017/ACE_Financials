import React from "react";
import "./Careers.css";
import { Divider } from "@material-ui/core";

function Careers() {
  return (
    <div className="careers">
      <h1>Openings -</h1>
      <div className="careers__1head">
        <h2>Consultant - Enterprise Solutions</h2>
        <div className="careers_line"></div>
      </div>
      <div className="careers__1container">
        <p>
          ACE Financials is here with a bang and we are here to disrupt the
          status quo in the world of Hotel Business Software.
        </p>
        <p>
          Be a part of our team to set a scorching pace of change & growth and
          create a world class organization.
        </p>
        <p>
          If you have the desire, urge and ambition to engage corporates and
          change the world and have hands on implementation experience of ERP
          software come and be a part of the our dynamic team.
        </p>
        <p>
          ACE Financials is a global player. We are the playing ground for great
          people with innovative ideas. Those who seek to be valued and
          respected for their undeterred effort to nurture the growth of our
          product and Organization will be rewarded the best. We provide the
          opportunity with a very high level of freedom to explore and grow
          vertically and horizontally. All of this is done with the customer as
          the single point focus.
        </p>
        <p>The best of you will get the better of competitive compensation.</p>
      </div>

      <div className="careers__2head">
        <h2>Principal Responsibilities:</h2>
        <div className="careers_line"></div>
      </div>
      <p>
        Driving business growth in the region and enabling partners and
        providing support in form of proposals, pricing and demos. Interacting
        with various teams globally to fine tune the offering as per market
        needs.
      </p>
      <div className="careers__2container">
        <h3>Requirements:</h3>
        <ul>
          <li>
            Experience of 10 years or more in pre-sales & Implementation with a
            proven track record Demonstrated ability of pursuing large size
            deals for enterprise solutions.
          </li>
          <div className="careers_Bline"></div>
          <li>
            Three years of end to end implementation experience of any ERP
            software and/or Cloud based ERP solutions for large corporations
            across multiple industries. Proven track record of identifying and
            establishing excellent rapport with key stakeholders of the customer
            organization
          </li>
          <div className="careers_Bline"></div>
          <li>
            Exceptional communication, presentation and interpersonal skills
          </li>
        </ul>
        <h3>Personal Characteristics:</h3>
        <ul>
          <li>
            Smart, Self-directed, self-motivated individual with motivation to
            succeed.
          </li>
          <div className="careers_Bline"></div>
          <li>Willingness for extensive travel</li>
        </ul>
      </div>
      <p className="careers__info">
        Send Resume to{"   "}
        <a href="mailto:hr@acefinancials.com?">hr@acefinancials.com</a>
      </p>
    </div>
  );
}

export default Careers;
