import React from "react";
import "./Services.css";
import { useDispatch } from "react-redux";
import services_wall from "./services_wall.jpg";
import services_bi from "./services_bi.png";
import { Link } from "react-router-dom";
import { setLoc } from "../../Features/Navigation/NavigationSlice";

function Services() {

  const dispatch = useDispatch();

  const Loc = "services";

  dispatch(setLoc(Loc));

  return (
    <div className="services">
      <img id="wall" src={services_wall} alt="" />
      <div id="head_text">
        <h2>Application Development</h2>
        <h2>and Software</h2>
      </div>
      <div className="services__content1">
        <h3 className="services__content1_intro">
          Sunshine Systems has experience of delivering more than 200 successful
          custom software development projects. Our range of services includes,
          Web designing and programming, e-commerce solutions, customized
          software, Business Intelligence and Data warehousing applications,
          network security, as well as Web, SharePoint and bespoke software
          development.
        </h3>
        <h2>ACE Products</h2>
        <div id="lineProd"></div>
        <h3 className="services__content1_prod">
          Sunshine Systems has a wide ranges of solutions ranging from ERP
          solutions for Hotels and Manufacturing. Following are the names of our
          product range:
        </h3>

        <div className="services_prods">
          <div id="prod_line"></div>
          <Link to="./hotels" className="prod_link">
            <span>ACE Financils for Hotel</span>
            <svg
              id="arrow"
              width="42"
              height="30"
              viewBox="0 0 52 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.4142 16.4142C52.1953 15.6332 52.1953 14.3668 51.4142 13.5858L38.6863 0.857864C37.9052 0.0768156 36.6389 0.0768156 35.8579 0.857864C35.0768 1.63891 35.0768 2.90524 35.8579 3.68629L47.1716 15L35.8579 26.3137C35.0768 27.0948 35.0768 28.3611 35.8579 29.1421C36.6389 29.9232 37.9052 29.9232 38.6863 29.1421L51.4142 16.4142ZM0 17H50V13H0L0 17Z"
                fill="#E1E1E1"
              />
            </svg>
          </Link>
          <div id="prod_line"></div>
          <Link to="./manufacturing" className="prod_link">
            <span>ACE Financials for Manufacturing</span>
            <svg
              id="arrow"
              width="42"
              height="30"
              viewBox="0 0 52 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.4142 16.4142C52.1953 15.6332 52.1953 14.3668 51.4142 13.5858L38.6863 0.857864C37.9052 0.0768156 36.6389 0.0768156 35.8579 0.857864C35.0768 1.63891 35.0768 2.90524 35.8579 3.68629L47.1716 15L35.8579 26.3137C35.0768 27.0948 35.0768 28.3611 35.8579 29.1421C36.6389 29.9232 37.9052 29.9232 38.6863 29.1421L51.4142 16.4142ZM0 17H50V13H0L0 17Z"
                fill="#E1E1E1"
              />
            </svg>
          </Link>
          <div id="prod_line"></div>
          <Link to="./payroll_hr" className="prod_link">
            <span>ACE Payroll and HR</span>
            <svg
              id="arrow"
              width="42"
              height="30"
              viewBox="0 0 52 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.4142 16.4142C52.1953 15.6332 52.1953 14.3668 51.4142 13.5858L38.6863 0.857864C37.9052 0.0768156 36.6389 0.0768156 35.8579 0.857864C35.0768 1.63891 35.0768 2.90524 35.8579 3.68629L47.1716 15L35.8579 26.3137C35.0768 27.0948 35.0768 28.3611 35.8579 29.1421C36.6389 29.9232 37.9052 29.9232 38.6863 29.1421L51.4142 16.4142ZM0 17H50V13H0L0 17Z"
                fill="#E1E1E1"
              />
            </svg>
          </Link>
          <div id="prod_line"></div>
          <Link to="./fixed_assets" className="prod_link">
            <span>ACE Fiexed Assets</span>
            <svg
              id="arrow"
              width="42"
              height="30"
              viewBox="0 0 52 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.4142 16.4142C52.1953 15.6332 52.1953 14.3668 51.4142 13.5858L38.6863 0.857864C37.9052 0.0768156 36.6389 0.0768156 35.8579 0.857864C35.0768 1.63891 35.0768 2.90524 35.8579 3.68629L47.1716 15L35.8579 26.3137C35.0768 27.0948 35.0768 28.3611 35.8579 29.1421C36.6389 29.9232 37.9052 29.9232 38.6863 29.1421L51.4142 16.4142ZM0 17H50V13H0L0 17Z"
                fill="#E1E1E1"
              />
            </svg>
          </Link>
          <div id="prod_line"></div>
          <Link to="./loyalty" className="prod_link">
            <span>ACE Loyality</span>
            <svg
              id="arrow"
              width="42"
              height="30"
              viewBox="0 0 52 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.4142 16.4142C52.1953 15.6332 52.1953 14.3668 51.4142 13.5858L38.6863 0.857864C37.9052 0.0768156 36.6389 0.0768156 35.8579 0.857864C35.0768 1.63891 35.0768 2.90524 35.8579 3.68629L47.1716 15L35.8579 26.3137C35.0768 27.0948 35.0768 28.3611 35.8579 29.1421C36.6389 29.9232 37.9052 29.9232 38.6863 29.1421L51.4142 16.4142ZM0 17H50V13H0L0 17Z"
                fill="#E1E1E1"
              />
            </svg>
          </Link>
          <div id="prod_line"></div>
          <Link to="./analytics" className="prod_link">
            <span>ACE Analytics</span>
            <svg
              id="arrow"
              width="42"
              height="30"
              viewBox="0 0 52 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.4142 16.4142C52.1953 15.6332 52.1953 14.3668 51.4142 13.5858L38.6863 0.857864C37.9052 0.0768156 36.6389 0.0768156 35.8579 0.857864C35.0768 1.63891 35.0768 2.90524 35.8579 3.68629L47.1716 15L35.8579 26.3137C35.0768 27.0948 35.0768 28.3611 35.8579 29.1421C36.6389 29.9232 37.9052 29.9232 38.6863 29.1421L51.4142 16.4142ZM0 17H50V13H0L0 17Z"
                fill="#E1E1E1"
              />
            </svg>
          </Link>
          <div id="prod_line"></div>
        </div>
      </div>
      <div className="services__content2">
        <div className="services__content2_head">
          <h2>Business Intelligence and Data Warehousing</h2>
          <div id="lineBi"></div>
        </div>
        <div className="content2_text">
          <h3>
            Sunshine provides BI & DWH solutions using SSIS, SSAS, SSRS, Cognos,
            informatica, Business Objects XI and Crystal Reports XI. Our strong
            DB skills and Development skills helped us to provide super BI
            solutions to our clients with very good tuned memory management,
            optimized query and drill down reports.
          </h3>
          <img src={services_bi} alt="" />
        </div>
      </div>
      <div className="services__content3">
        <h2>Support Structure</h2>
        <div id="lineSS"></div>
        <h3>
          At Sunshine Systems, we believe that no solution can be deployed
          successfully without the right people to support the business. Our
          team of consultants have over 200 man years of varied experience. Our
          support call logging & issue rectification is of very high standards.
          We maintain a strong technical support team to quickly resolve your
          issues both onsite and remotely.
        </h3>
      </div>
    </div>
  );
}

export default Services;
