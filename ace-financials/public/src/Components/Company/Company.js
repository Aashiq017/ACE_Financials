import React from "react";
import "./Company.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setLoc } from "../../Features/Navigation/NavigationSlice";
import { Paper, Tabs, Tab } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import WorkIcon from "@material-ui/icons/Work";

import About from "./Tabs/About";
import News from "./Tabs/News";
import Careers from "./Tabs/Careers";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function Company() {
  const dispatch = useDispatch();

  const Loc = "company";

  dispatch(setLoc(Loc));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="company">
      <Paper elevation={3} className="company__bar" square>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="About Us" icon={<InfoIcon />} {...a11yProps(0)} />
          <Tab label="Careers" icon={<WorkIcon />} {...a11yProps(1)} />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Careers />
      </TabPanel>
    </div>
  );
}

export default Company;
