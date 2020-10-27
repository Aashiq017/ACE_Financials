import React from "react";
import "./PartnerShip.css";
import { useDispatch } from "react-redux";
import { setLoc } from "../../Features/Navigation/NavigationSlice";
import { Divider, Tooltip, IconButton, Fab, Popover } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CloseIcon from "@material-ui/icons/Close";

function PartnerShip() {
  const dispatch = useDispatch();

  const Loc = "partnership";

  dispatch(setLoc(Loc));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="partnerShip">
      <div className="partnerShip__head">
        <h1>Partner with us</h1>
        <h2>Become a Channel Partner /Re-seller</h2>
      </div>
      <div className="partnerShip__contact">
        <Tooltip title="Contact">
          <Fab color="secondary" onClick={handleClick}>
            <EmailIcon fontSize="large" />
          </Fab>
        </Tooltip>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
      >
        <div className="partnerShip__contact_box">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <h3>Contact For Enquiries</h3>
            <IconButton>
              <CloseIcon fontSize="large" onClick={handleClose} />
            </IconButton>
          </div>
          <Divider />
          <h4>Address </h4>
          <h6>P.O.Box:43700</h6>
          <h6>MEZ/3 Office 4, Awadh Building, Hor Al Anz, Dubai</h6>
          <h6>United Arab Emirates</h6>
          <Divider />
          <h4>Contact No.</h4>
          <h6>
            Phone (Direct): <a href="tel:+971501647438"> +971-50-164-7438</a>
          </h6>
          <Divider />
          <h4>E-mail</h4>
          <h6>
            Enquiries:
            <a href="mailto:info@acefinancials.com?"> info@acefinancials.com</a>
          </h6>
        </div>
      </Popover>
      <div className="partnerShip__content">
        <h3>Benefits of Being a Sunshine Systems LLC Channel Partner</h3>
        <h4>
          As a member of Sunshine Systems's Channel Partner Program, you will
          get:
        </h4>
        <ul>
          <li>
            Attractive discounts on award-winning Sunshine Systems LLC products.
          </li>
          <Divider />
          <li>
            Opportunities to sell your Professional Services to provide
            additional revenue streams and provide value-add services to your
            customers.
          </li>
          <Divider />
          <li>
            Ability to participate in Sunshine Systems LLC product special
            programs.
          </li>
          <Divider />
          <li>Flexible purchase options via online or Purchase Order (PO).</li>
          <Divider />
          <li>
            Minimum program requirements - become a member fast and start making
            money sooner.
          </li>
          <Divider />
          <li>
            Minimum program requirements - become a member fast and start making
            money sooner.
          </li>
          <Divider />
          <li>
            Instant after-sale support and services: Your customers will be
            supported immediately if they have any problem using our products.
          </li>
          <Divider />
          <li>Access to sales tools and partner training.</li>
          <Divider />
          <li>Joint marketing opportunities.</li>
          <Divider />
          <li>
            Listing on the Sunshine Systems's Partner section of the Sunshine
            Systems LLC web site.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PartnerShip;
