import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ElectricalLoad from "./pages/ElectricalLoad";
import SolarPanelSizing from "./pages/SolarPanelSizing";
import CableTray from "./pages/CableTray";
import ShortCircuitCalc from "./pages/ShortCircuitCalc";
import MainNavigation from "./components/Navbar/MainNavigation";
import bodyStyles from "./mainStyles/body.module.css";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <Router>
        <MainNavigation />

        <Switch>
          <Route
            path="/short-circuit-current-calculation"
            component={ShortCircuitCalc}
          />
          <Route path="/solar-panel-sizing" component={SolarPanelSizing} />
          <Route path="/cable-tray-calculator" component={CableTray} />
          <Route path="/" component={ElectricalLoad}>
            <ElectricalLoad />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
