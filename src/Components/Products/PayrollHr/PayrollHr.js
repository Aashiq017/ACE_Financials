import React from "react";
import "./PayrollHr.css";
import { useDispatch } from "react-redux";
import for_payroll_hr from "./for_payroll_hr.jpg";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { setLoc } from "../../../Features/Navigation/NavigationSlice";

function PayrollHr() {
  const dispatch = useDispatch();

  const Loc = "products";

  dispatch(setLoc(Loc));

  return (
    <div className="product">
      <div className="product__img">
        <img src={for_payroll_hr} alt="" />
        <div className="product__title">
          <h2>ACE Payroll and HR</h2>
          <div id="lineP"></div>
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
        <Link to="./payroll_hr" className="sub_link active">
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
        <h2>
          For Strategic Management of Your Most Critical Business Asset: The
          Human Resource.
        </h2>
        <h3>
          ACE offers a wide range of scalable and modular property and central
          solutions for effective hotel management. Whether you operate a single
          boutique hotel or an international, multi-branded hotel chain, ACE
          will put together a solution that perfectly fits your unique business
          needs. The portfolio encompasses solutions for back office, CRM, sales
          and catering, revenue management, reservations, distribution and a lot
          more. With more than 100+ certified interfaces to other systems we
          ensure the best connectivity and smooth running business processes.
        </h3>
      </div>
      <div className="product__content2">
        <h3>
          Just as every property has its own flair, every business has its own
          specific needs. Responding to the ever-growing specialisation in the
          hotel industry, ACE offers the flexibility to fulfil the special
          requirements of the individual market. Regardless of whether you are a
          resort or city hotel, a family-run boarding house or a luxurious spa,
          a deluxe or a budget hotel – ACE perfectly adapts to your needs.
        </h3>
      </div>
      <div className="product__content3">
        <h3>
          The ACE Enterprise Solution is a truly comprehensive software suite
          for hotel management and core central systems. It offers hotel
          operators the ability to share information across multiple
          applications and properties on a single database. Specifically
          designed for the demanding environments of chain hotels, ACE offers
          central modules,the customer relationship management (CRM) package
          specifically designed for the hotel industry.
        </h3>
      </div>
    </div>
  );
}

export default PayrollHr;
