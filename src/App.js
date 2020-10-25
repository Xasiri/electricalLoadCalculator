import React,{useState} from 'react';
import Nav from './components/Navbar/Navbar';
import Home from './components/pages/Home'
import SolarLoadCalculator from './components/pages/SolarLoadCalculator'
import TrayCalculator from './components/pages/TrayCalculator'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SizeofPanel from './components/SolarCalculator/sizeofPanel';
import styled from 'styled-components';

function App() {
  const [item, setItem] = useState([]);
  return (
    <Router>
    <div >
      <Nav/>
      <Switch>
      <Route path="/solar-load-calculator" component={SolarLoadCalculator}/>
      <Route path="/solar-panel-sizing" component={SizeofPanel} />
      <Route path="/tray-calculator" component={TrayCalculator}/>
      <Route path="/" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
} 

export default App;
