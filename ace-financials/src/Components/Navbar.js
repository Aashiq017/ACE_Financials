import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectNavLoc } from "../Features/Navigation/NavigationSlice";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { TreeView, TreeItem } from "@material-ui/lab";

import {
  SwipeableDrawer,
  InputBase,
  IconButton,
  List,
  ListItem,
  Divider
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "./logo.png";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    transition: "0.3s",
    backgroundColor: fade(theme.palette.common.black, 0.03),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.06)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

function Navbar() {
  const classes = useStyles();

  const navLoc = useSelector(selectNavLoc);
  console.log(navLoc);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const isHome = "home" === navLoc;
  const isProducts = "products" === navLoc;
  const isServices = "services" === navLoc;
  const isCustomers = "customers" === navLoc;
  const isPartnerShip = "partnership" === navLoc;
  const isCompany = "company" === navLoc;
  const isContact = "support" === navLoc;

  let nav_icon = document.querySelector("#nav__icon");


  while (window.innerHeight >= 1000) {
    nav_icon.classList.add("icon_dis");
  }

  return (
    <nav>
      <div className="nav__apr">
        <div className="main__logo">
          <img src={logo} alt="" />

          <h3 className="logo">Sunshine Systems</h3>
          <p></p>
        </div>
        <div className="nav__search">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
        <div id="nav__icon">
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon style={{ fontSize: 40 }} />
          </IconButton>
        </div>
        <React.Fragment key="right">
          <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={handleDrawerClose}
            onOpen={handleDrawerOpen}
          >
            <div className={classes.list} role="presentation">
              <List>
                <ListItem button key="search">
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem
                  button
                  key="home"
                  onClick={handleDrawerClose}
                  onKeyDown={handleDrawerClose}
                >
                  <Link to="/" className="link">
                    <span>Home</span>
                  </Link>
                </ListItem>
                <ListItem>
                  <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    multiSelect
                    className="link"
                    button
                    key="products"
                  >
                    <TreeItem
                      nodeId="1"
                      label={
                        <a href className="link">
                          <span>Products</span>
                        </a>
                      }
                      className="product_exp"
                    >
                      <TreeItem
                        nodeId="2"
                        label={
                          <Link
                            to="./hotels"
                            className="link_sub"
                            onClick={handleDrawerClose}
                            onKeyDown={handleDrawerClose}
                          >
                            <span>ACE Financils for Hotel</span>
                            <Divider />
                          </Link>
                        }
                      />
                      <TreeItem
                        nodeId="3"
                        label={
                          <Link
                            to="./manufacturing"
                            className="link_sub"
                            onClick={handleDrawerClose}
                            onKeyDown={handleDrawerClose}
                          >
                            <span>ACE Financials for Manufacturing</span>
                            <Divider />
                          </Link>
                        }
                      />
                      <TreeItem
                        nodeId="4"
                        label={
                          <Link
                            to="./payroll_hr"
                            className="link_sub"
                            onClick={handleDrawerClose}
                            onKeyDown={handleDrawerClose}
                          >
                            <span>ACE Payroll and HR</span>
                            <Divider />
                          </Link>
                        }
                      />
                      <TreeItem
                        nodeId="5"
                        label={
                          <Link
                            to="./fixed_assets"
                            className="link_sub"
                            onClick={handleDrawerClose}
                            onKeyDown={handleDrawerClose}
                          >
                            <span>ACE Fiexed Assets</span>
                            <Divider />
                          </Link>
                        }
                      />
                      <TreeItem
                        nodeId="6"
                        label={
                          <Link
                            to="./loyalty"
                            className="link_sub"
                            onClick={handleDrawerClose}
                            onKeyDown={handleDrawerClose}
                          >
                            <span>ACE Loyality</span>
                            <Divider />
                          </Link>
                        }
                      />
                      <TreeItem
                        nodeId="7"
                        label={
                          <Link
                            to="./analytics"
                            className="link_sub"
                            onClick={handleDrawerClose}
                            onKeyDown={handleDrawerClose}
                          >
                            <span>ACE Analytics</span>
                            <Divider />
                          </Link>
                        }
                      />
                    </TreeItem>
                  </TreeView>
                </ListItem>
                <ListItem
                  button
                  key="services"
                  onClick={handleDrawerClose}
                  onKeyDown={handleDrawerClose}
                >
                  <Link to="/services" className="link">
                    <span>Services</span>
                  </Link>
                </ListItem>
                <ListItem
                  button
                  key="customers"
                  onClick={handleDrawerClose}
                  onKeyDown={handleDrawerClose}
                >
                  <Link to="/customers" className="link">
                    <span>Customers</span>
                  </Link>
                </ListItem>
                <ListItem
                  button
                  key="partnership"
                  onClick={handleDrawerClose}
                  onKeyDown={handleDrawerClose}
                >
                  <Link to="/partnership" className="link">
                    <span>PartnerShip</span>
                  </Link>
                </ListItem>
                <ListItem
                  button
                  key="company"
                  onClick={handleDrawerClose}
                  onKeyDown={handleDrawerClose}
                >
                  <Link to="/company" className="link">
                    <span>Company</span>
                  </Link>
                </ListItem>
                <ListItem
                  button
                  key="contact"
                  onClick={handleDrawerClose}
                  onKeyDown={handleDrawerClose}
                >
                  <Link to="/contact" className="link">
                    <span>Contact Us</span>
                  </Link>
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
      <div className="nav__menu">
        <div>
          <Link to="./" className={`link ${isHome && "current"}`}>
            <span>Home</span>
          </Link>
        </div>
        <div>
          <Link to="./hotels" className={`link ${isProducts && "current"}`}>
            <span>Products</span>
          </Link>
        </div>
        <div>
          <Link to="./services" className={`link ${isServices && "current"}`}>
            <span>Services</span>
          </Link>
        </div>
        <div>
          <Link to="./customers" className={`link ${isCustomers && "current"}`}>
            <span>Customers</span>
          </Link>
        </div>
        <div>
          <Link
            to="./partnership"
            className={`link ${isPartnerShip && "current"}`}
          >
            <span>PartnerShip</span>
          </Link>
        </div>
        <div>
          <Link to="./company" className={`link ${isCompany && "current"}`}>
            <span>Company</span>
          </Link>
        </div>
        <div>
          <Link to="./contact" className={`link ${isContact && "current"}`}>
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
