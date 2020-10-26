import React from "react";
import "./Manufacturing.css";
import { useDispatch } from "react-redux";
import for_manufacturing from "./for_manufacturing.jpg";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { setLoc } from "../../../Features/Navigation/NavigationSlice";

function Manufacturing() {
  const dispatch = useDispatch();

  const Loc = "products";

  dispatch(setLoc(Loc));

  return (
    <div className="product">
      <div className="product__img">
        <img src={for_manufacturing} alt="" />
        <div className="product_title">
          <h2>ACE Financials for Manufacturing</h2>
          <div id="lineM"></div>
        </div>
      </div>
      <div className="products_menu">
        <div className="menu_head">Products Overview</div>
        <Divider />
        <Link to="./hotels" className="sub_link">
          <span>ACE Financils for Hotel</span>
        </Link>
        <Divider />
        <Link to="./manufacturing" className="sub_link active">
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
        <Link to="./analytics" className="sub_link">
          <span>ACE Analytics</span>
        </Link>
        <Divider />
      </div>
      <div className="product__content1">
        <h3>
          ACE offers a wide range of integrated solutions to fit the specific
          needs of manufacturing industries. It offers the state of art, open
          system compliant, industry standard software developed using C#,
          ASP.Net and SQL Server/Oracle with multi browser compatability web
          based solution. An extremely stable product with multiple smoothly
          running installations that offers immediate short term benefits as
          well as long term protection for your investment. Short-term benefits
          are derived from a quick, smooth and well-defined implementation path.
        </h3>
      </div>
      <div className="product__content2">
        <h3>
          Highly user friendly screens with online help and single point data
          entry operations for all corporate data ensures ease of operation and
          transition. This results in an ability to focus rapidly on key
          Management Information Systems and reporting leading to Decision
          Support for Management. The long-term benefits are secured by highly
          flexible nature of the package, which is ensured by allowing changing
          Business Rules & Workflow Engineering to be defined.
        </h3>
      </div>
      <div className="product__content3">
        <h3>
          This ensures that the package will continue to support you as your
          business evolves or engineering of the business process is performed
          with minimal IT intervention.
        </h3>
      </div>
    </div>
  );
}

export default Manufacturing;
