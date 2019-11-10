import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import "./style.css";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md" sticky={"top"}>
        <NavbarBrand href="/"><img src="/googlebooks.png" alt="Google Books logo"/> React Search</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/search/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/saved">Saved</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <br />
        {props.children}
      </Navbar>
  );
}

export default AppNavbar;