import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/layout/Header";

const Food = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Header />
        </Switch>
      </Router>
    </div>
  );
};

export default Food;
