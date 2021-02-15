import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavLinks";
import ElectricalLoad from "./pages/ElectricalLoad";
import SolarPanelSizing from "./pages/SolarPanelSizing";
import CableTray from "./pages/CableTray";
import ShortCircuitCalc from "./pages/ShortCircuitCalc";
import MainNavigation from "./components/Navbar/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />

      <Switch>
        <Route
          path="/short-circuit-current-calculation"
          component={ShortCircuitCalc}
        />
        <Route path="/solar-panel-sizing" component={SolarPanelSizing} />
        <Route path="/cable-tray-calculator" component={CableTray} />
        <Route path="/" component={ElectricalLoad} />
      </Switch>
    </Router>
  );
}

export default App;
