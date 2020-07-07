import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";

import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar fluid fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <div class="logo">
                <span>&gt</span>
                <span>/home</span>
                <span></span>
              </div>
            </Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <LinkContainer to="#about">
            <NavItem>About</NavItem>
          </LinkContainer>

          <Link to="/posts">
            <NavItem>Posts</NavItem>
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
