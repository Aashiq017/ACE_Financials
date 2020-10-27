import React from "react";
import "./FixedAssets.css";
import { useDispatch } from "react-redux";
import for_fixed_assets from "./for_fixed_assets.jpg";
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
        <img src={for_fixed_assets} alt="" />
        <div className="product__title">
          <h2>ACE Fixed Assets</h2>
          <div id="lineF"></div>
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
        <Link to="./fixed_assets" className="sub_link active">
          <span>ACE Fiexed Assets</span>
        </Link>
        <Divider />
        <Link to="./loyalty" className="sub_link">
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
          ACE offers asset accounting software that allows you to easily track
          assets and calculate your clients depreciation automatically.
        </h3>
        <h3>Separate values for book and tax depreciation</h3>
        <h3>
          ACE offers a wide range of integrated solutions to fit the specific
          needs of customer loyalty. We combine loyalty management technology
          and customer management into one comprehensive and integrated
          solution.
        </h3>
      </div>
      <div className="product__content2">
        <h3>
          ACE Fixed Asset Manager is available as a compatible add-on solution
          for ACE Professional or stand-alone software. It includes:
        </h3>
        <ul>
          <Divider />
          <li>
            Ability to track asset purchases and sales throughout the year
          </li>
          <Divider />
          <li>Reporting for client property tax return </li>
          <Divider />
          <li>
            Easy-to-understand depreciation schedule (including categories)
            along with tax returns{" "}
          </li>
          <Divider />
          <li>Service and delivery</li>
          <Divider />
        </ul>
      </div>
    </div>
  );
}

export default Loyalty;
