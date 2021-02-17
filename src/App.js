import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ElectricalLoad from "./pages/ElectricalLoad";
// import SolarPanelSizing from "./pages/SolarPanelSizing";
// import CableTray from "./pages/CableTray";
// import ShortCircuitCalc from "./pages/ShortCircuitCalc";
import MainNavigation from "./components/Navbar/MainNavigation";

const ElectricalConsumptionLoad = lazy(() => import("./pages/ElectricalLoad"));
const CableTrayCalulator = lazy(() => import("./pages/CableTray"));
const SolarPanelSizer = lazy(() => import("./pages/SolarPanelSizing"));
const ShortCircuitCalculation = lazy(() => import("./pages/ShortCircuitCalc"));

function App() {
  return (
    <Router>
      <MainNavigation />

      <Switch>
        <Suspense fallback={<div>Loading Page...</div>}>
          <Route
            path="/short-circuit-current-calculation"
            component={ShortCircuitCalculation}
          />
          <Route path="/solar-panel-sizing" component={SolarPanelSizer} />
          <Route path="/cable-tray-calculator" component={CableTrayCalulator} />
          <Route path="/" component={ElectricalConsumptionLoad} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
