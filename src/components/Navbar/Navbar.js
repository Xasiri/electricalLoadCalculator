import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './nav.css';

function Navigation() {
  return (
    <Navbar bg="white" variant="light" >
      <Nav className='nav-tabs'>
        <Nav.Link  href="/">Power Consumption Calculator</Nav.Link>
        <Nav.Link href="solar-panel-sizing">Solar Panel Sizing</Nav.Link>
        <Nav.Link href="cable-tray-calculator">Tray Calculator</Nav.Link>
        <Nav.Link href="short-circuit-current-calculation">
          Short Circuit Current Calculation
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
