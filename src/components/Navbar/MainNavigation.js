import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav, Navbar, Container, Button, Collapse } from "react-bootstrap";
import "./navi.css";
const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const openDrawer = () => setDrawerIsOpen(!drawerIsOpen);

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
      <Navbar.Brand href="/">
        <img
          src="https://eml-eis.com/wp-content/uploads/2020/09/logo-1.png"
          alt="Logo"
          className="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler"
      />

      <Navbar.Collapse
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <Nav defaultActiveKey="power">
          <Link to="/">
            <Nav.Link eventKey="power" href="/">
              Power Consumption Calculator
            </Nav.Link>
          </Link>
          <Link to="/solar-panel-sizing">
            <Nav.Link href="#solar-panel-sizing">Solar Panel Sizing</Nav.Link>
          </Link>
          <Link to="/cable-tray-calculator">
            <Nav.Link href="#cable-tray-calculator">Tray Calculator</Nav.Link>
          </Link>

          <Link to="/short-circuit-current-calculation">
            <Nav.Link href="#short-circuit-current-calculation">
              Short Circuit Current Calculation
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
