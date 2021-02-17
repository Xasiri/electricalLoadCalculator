import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import styles from "./MainNavigation.module.css";
import Backdrop from "../UIElements/Backdrop";
import { FaBars } from "react-icons/fa";
const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className={styles.mainNavigationDrawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className={styles.mainNavigationMenuBtn} onClick={openDrawer}>
          <FaBars size="1.75em" />
        </button>
        <Nav className={styles.mainHeader}>
          <NavLinks />
        </Nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
