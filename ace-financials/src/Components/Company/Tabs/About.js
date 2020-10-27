import React from "react";
import "./About.css";

function About() {
  
  return (
    <div className="about">
      <div className="about__1head">
        <h1>About Us</h1>
      </div>
      <div className="about__container">
        <p>
          Sunshine Systems is a leading IT solutions provider catering to
          domains such as Hospitality, Manufacturing, Loyalty, and bespoke
          software development and Data warehousing solutions.
        </p>
        <p>
          Sunshine Systems was founded in 2002 and is headquartered in India.
          Sunshine systems today has global offices in the US and UAE. It has
          built a reputation in implementing hospitality solutions across major
          hotels internationally while also developing and customizing solutions
          as per clients requirements in the manufacturing sector.
        </p>
      </div>
      <div className="about__2head">
        <h1>Why to choose ACE</h1>
        <div className="about_line"></div>
      </div>
      <ul>
        <li>
          More than 10 years established expertise in the hospitality businesses
        </li>
        <li>Global Presence - Local Support</li>
        <li>
          Solutions for hotels, restaurant business, retail, stadiums, arenas,
          theme parcs, casinos, cruise ships.
        </li>
        <li>
          Serving a strong customer base with an impressive list of references
        </li>
        <li>Scalable products, serving all customer sizes</li>
        <li>Supporting single and multisite environments</li>
        <li>Fast implementation</li>
        <li>Low administration complexity</li>
        <li>Proven integration experience</li>
        <li>Strong focus on growth</li>
        <li>Company internal training centre</li>
        <li>Value creation through innovation & consultative selling</li>
      </ul>
    </div>
  );
}

export default About;
