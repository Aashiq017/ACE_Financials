import React, { useState, useEffect } from "react";
import "./Customers.css";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { db } from "../../Features/firebase";

import {
  Tabs,
  Tab,
  Paper,
  Box,
  Typography,
  LinearProgress
} from "@material-ui/core";
import { setLoc } from "../../Features/Navigation/NavigationSlice";

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

function Customers() {
  const dispatch = useDispatch();

  const Loc = "customers";

  dispatch(setLoc(Loc));

  const [middleEast, setMiddleEast] = useState([]);
  const [india, setIndia] = useState([]);

  useEffect(() => {
    db.collection("Clients in Middle East").onSnapshot((snapshot) => {
      setMiddleEast(snapshot.docs.map((doc) => doc.data()));
    });
    console.log(middleEast);
  }, [1]);

  useEffect(() => {
    db.collection("Clients in India").onSnapshot((snapshot) => {
      setIndia(snapshot.docs.map((doc) => doc.data()));
    });
    console.log(india);
  }, [2]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="customers">
      <div className="board">
        <Paper className="bar">
          <h2>Customers Overview</h2>
          <Tabs
            value={value}
            centered
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Middle East" {...a11yProps(0)} />
            <Tab label="India" {...a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={value} index={0}>
          <div className="middleEast">
            <h2>Valuable Clients in Middle East</h2>
            {middleEast ? (
              <div className="middleEast__clients">
                {middleEast.map((client) => (
                  <div className="client">
                    <div className="client__img">
                      <img src={client.img} alt="" />
                    </div>
                    <div className="client__name">
                      <h6>{client.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <LinearProgress />
            )}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="india">
            <h2>Valuable Clients in India</h2>
            {india ? (
              <div className="india__clients">
                {india?.map((client) => (
                  <div className="client">
                    <div className="client__img">
                      <img src={client.img} alt="" />
                    </div>
                    <div className="client__name">
                      <h6>{client.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <LinearProgress />
            )}
          </div>
        </TabPanel>
      </div>
    </div>
  );
}

export default Customers;
