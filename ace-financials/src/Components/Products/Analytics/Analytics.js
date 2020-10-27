import React from "react";
import "./Analytics.css";
import { useDispatch } from "react-redux";
import for_analytics from "./for_analytics.png";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { setLoc } from "../../../Features/Navigation/NavigationSlice";

function Analytics() {
  const dispatch = useDispatch();

  const Loc = "products";

  dispatch(setLoc(Loc));

  return (
    <div className="product">
      <div className="product__img">
        <img src={for_analytics} alt="" />
        <div className="product__title">
          <h2>ACE Analytics</h2>
          <div id="lineAl"></div>
        </div>
      </div>
      <div className="products_menu">
        <div className="menu_head">Products Overview</div>
        <Divider />
        <Link to="./hotels" className="sub_link">
          <span>ACE Financils for Hotel</span>
        </Link>
        <Divider />
        <Link to="./manufacturing" className="sub_link">
          <span>ACE Financials for Manufacturing</span>
        </Link>
        <Divider />
        <Link to="./payroll_hr" className="sub_link">
          <span>ACE Payroll and HR</span>
        </Link>
        <Divider />
        <Link to="./fixed_assets" className="sub_link">
          <span>ACE Fiexed Assets</span>
        </Link>
        <Divider />
        <Link to="./loyalty" className="sub_link">
          <span>ACE Loyality</span>
        </Link>
        <Divider />
        <Link to="./analytics" className="sub_link active">
          <span>ACE Analytics</span>
        </Link>
        <Divider />
      </div>
      <div className="product__content1">
        <h2>ACE Analytical Reports</h2>
        <h3>
          ACE Financials reporting software takes information from one or more
          data sources and presents it in an easy-to-read, highly interactive
          format so business users can stay informed and make better decisions.
          Design interactive pixel perfect and/or ad hoc based reports for the
          web, the printer or mobile device.
        </h3>
      </div>
      <div className="product__content2">
        <h2>Interactive Reporting</h2>
        <ul>
          <li>
            Highly interactive reports provide online sorting, filtering,
            conditional formatting, column move/hide, along with format changes
            that can be saved for re-use.
          </li>
          <li>
            Report snapshots deliver rapid response time to user interactions
            reducing query impact to underlying source systems.
          </li>
          <li>
            Unlimited interactive viewer license allows embedding interactive
            reports inside web applications or distribution in email for large
            deployments.
          </li>
        </ul>
      </div>
      <div className="product__content3">
        <h2>Dashboard</h2>
        <h3>
          ACE dashboard software combines data and graphical indicators to
          deliver at-a-glance summaries of information for users to view the
          state of their business and quickly respond. Screenshots
        </h3>
      </div>
    </div>
  );
}

export default Analytics;
