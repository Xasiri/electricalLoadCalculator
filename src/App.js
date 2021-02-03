import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ElectricalLoad from './pages/ElectricalLoad';
import Navbar from './components/Navbar/Navbar';
import SolarPanelSizing from './pages/SolarPanelSizing';
import CableTray from './pages/CableTray';
import ShortCircuitCalc from './pages/ShortCircuitCalc';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/short-circuit-current-calculation"
            component={ShortCircuitCalc}
          />

          <Route path="/solar-panel-sizing" component={SolarPanelSizing} />
          <Route path="/cable-tray-calculator" component={CableTray} />
          <Route path="/" component={ElectricalLoad} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
