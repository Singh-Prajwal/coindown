// NavigationBar.js
import React, { useState } from "react"
import { Nav, Navbar, Modal } from "react-bootstrap"
import styled from "styled-components"
import "../App.css"

function NavigationBar({ className, darkMode }) {
  const [isNavOpen, setNavOpen] = useState(false)

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen)
  }

  const handleCloseNav = () => {
    setNavOpen(false)
  }

  return (
    <div className={`d-flex flex-col text-white ${className}`}>
      <Navbar className={`w-100 p-0 ${darkMode ? "bg-dark" : "bg-light"} navbar-wrapper background`} expand="md">
        <Navbar.Brand className="text-white ps-3 fw-bold">
          <div className="nav-logo p-0 m-0">
            <a href="/" className="link d-flex flex-row align-items-center no-link">
              <img
                src=".\coins.png"
                width="100"
                className="logo"
                height="80"
                alt="Coin's"
              />
              <Navbar.Text>
                <div className="justify-content-center text-white Viva">
                  <h3>COINDOWN</h3>

                </div>
              </Navbar.Text>
            </a>
            
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler"
          onClick={handleNavToggle}
        >
          <span className={`navbar-toggler-icon ${isNavOpen ? "open" : ""}`} />
        </Navbar.Toggle>
        
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`justify-content-end me-4 ${isNavOpen ? "open" : ""}`}
        >
          <Navbar.Text>
            <div className={`me-5 nav-element ${darkMode ? "dark-mode-text" : ""}`}>
              <a href="/" className="no-link">
                <span className={`large prime-text ${darkMode ? "dark-mode-text" : ""}`}>
                  <h4 className="m-0 text-white Viva">CONTACT</h4>
                </span>
              </a>
            </div>
          </Navbar.Text>
          <Navbar.Text>
            <div className={`me-5 nav-element ${darkMode ? "dark-mode-text" : ""}`}>
              <a href="/" className="no-link">
                <span className={`large prime-text ${darkMode ? "dark-mode-text" : ""}`}>
                  <h4 className="m-0 text-white Viva">ABOUT</h4>
                </span>
              </a>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={isNavOpen} onHide={handleCloseNav} className='Viva' animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <a href="/" className="no-link prime-text">
              <h3>

              COINDOWN
              </h3>
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav.Link className={`prime-text ${darkMode ? "dark-mode-text" : ""}`} href="/">
            CONTACT
          </Nav.Link>
          <Nav.Link className={`prime-text ${darkMode ? "dark-mode-text" : ""}`} href="/">
            ABOUT
          </Nav.Link>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default styled(NavigationBar)`
  .logo {
    border-radius: 10px;
  }
  @media (max-width: 575px) {
    .nav-element {
      display: none; 
    }
    .navbar-toggler {
      background-color: transparent; 
      border: none; 
    }
    .navbar-toggler-icon {
      background-color: transparent; 
    }
    .navbar-toggler:focus,
    .navbar-toggler:hover {
      background-color: transparent; 
    }
    .navbar-toggler-icon.open {
      background-color: #fff;
    }
  }
  .dark-mode-text {
    color: #fff; 
  }
  .nav-element:hover {
    scale:1.1;
  }
`
