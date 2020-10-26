import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import ElectricalLoad from './pages/ElectricalLoad';
import Navbar from './components/Navbar/Navbar'
import SolarPanelSizing from './pages/SolarPanelSizing'
import CableTray from './pages/CableTray'

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route path ="/electrical-load-calculator" component={ElectricalLoad} />
    <Route path="/solar-panel-sizing" component={SolarPanelSizing}/>
    <Route path ="/cable-tray-calculator" component={CableTray}/>
    <Route path ="/" component={Home}/>
    </Switch>
     
    </div>
    </Router>
  );
}

export default App;
