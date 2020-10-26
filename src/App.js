import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Hotel from "./Components/Products/Hotel/Hotel";
import Manufacturing from "./Components/Products/Manufacturing/Manufacturing";
import PayrollHr from "./Components/Products/PayrollHr/PayrollHr";
import Loyalty from "./Components/Products/Loyalty/Loyalty";
import FixedAssets from "./Components/Products/FixedAssets/FixedAssets";
import Analytics from "./Components/Products/Analytics/Analytics";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact_Us/Contact";
import Company from "./Components/Company/Company";
import Customers from "./Components/Customers/Customers";
import PartnerShip from "./Components/PartnerShip/PartnerShip";
import Footer from "./Components/Footer";

import ScrollToTop from "./Features/ScrollToTop";

export default function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous"
      />
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="app__context">
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/company">
              <Company />
            </Route>
            <Route path="/partnership">
              <PartnerShip />
            </Route>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/hotels">
              <Hotel />
            </Route>
            <Route path="/manufacturing">
              <Manufacturing />
            </Route>
            <Route path="/payroll_hr">
              <PayrollHr />
            </Route>
            <Route path="/fixed_assets">
              <FixedAssets />
            </Route>
            <Route path="/loyalty">
              <Loyalty />
            </Route>
            <Route path="/analytics">
              <Analytics />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <div className="app__footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}
