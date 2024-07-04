import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    { to: "/", label: "Home", icon: <AiOutlineHome /> },
    // { to: "/about", label: "About", icon: <AiOutlineUser /> },
    // {
    //   to: "/project",
    //   label: "Projects",
    //   icon: <AiOutlineFundProjectionScreen />,
    // },
    // { to: "/resume", label: "Resume", icon: <CgFileDocument /> },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src="" className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(!expand);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navItems.map((item, idx) => (
              <Nav.Item key={idx}>
                <Nav.Link
                  as={Link}
                  to={item.to}
                  onClick={() => updateExpanded(false)}
                >
                  {item.icon} <span className="nav-label">{item.label}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
