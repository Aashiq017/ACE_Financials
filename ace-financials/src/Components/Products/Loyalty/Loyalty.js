import React from "react";
import "./Loyalty.css";
import { useDispatch } from "react-redux";
import for_loyalty from "./for_loyalty.jpg";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { setLoc } from "../../../Features/Navigation/NavigationSlice";

function Loyalty() {
  const dispatch = useDispatch();

  const Loc = "products";

  dispatch(setLoc(Loc));

  return (
    <div className="product">
      <div className="product__img">
        <img src={for_loyalty} alt="" />
        <div className="product__title">
          <h2>ACE Loyalty</h2>
          <div id="lineL"></div>
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
        <Link to="./loyalty" className="sub_link active">
          <span>ACE Loyality</span>
        </Link>
        <Divider />
        <Link to="./analytics" className="sub_link">
          <span>ACE Analytics</span>
        </Link>
        <Divider />
      </div>
      <div className="product__content1">
        <h3>
          ACE offers a wide range of integrated solutions to fit the specific
          needs of customer loyalty. We combine loyalty management technology
          and customer management into one comprehensive and integrated
          solution.
        </h3>
      </div>
      <div className="product__content2">
        <ul>
          <li>Configure multiple loyalty plans to fit your needs</li>
          <li>
            Generate incentives for customers by creating redemption plan
            thresholds
          </li>
          <li>
            Use loyalty cards either locally or across multiple properties.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Loyalty;
