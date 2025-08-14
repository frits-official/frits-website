'use client'

import { Button, Container, Nav, Navbar, Offcanvas, Stack, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./css/navbar.css"
import logo from "../../../public/logo-no-back.png"

export default function Navigation() {
  const logoHeight = 60;
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(0.7)

  const adjustVisible = () => { 
    let scroll = Math.min(Math.max((document.documentElement.scrollTop) / 1000, 0), 1) + 0.7
    setScrolled(scroll);
  }; 
  useEffect(() => {
    window.addEventListener('scroll', adjustVisible); 
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="dark rounded-bottom" style={{ backgroundColor: `rgba(21, 20, 26, ${scrolled})` }} sticky="top" id="top" data-bs-theme="dark">
      <Container fluid className="px-3">
        <Navbar.Brand className="ms-5 d-block">
          <Link href="/">
            <img src={logo.src} height={logoHeight} className="d-inline-block align-top me-2" alt="Logo"></img>
          </Link>
        </Navbar.Brand>
        <Nav className="float-end">
          <NavDropdown title={<span className="fi fi-gb pt-1"></span>}>
            <div className="ms-2">
              <Link href="/vi"><span className="fi fi-vn"></span> Vietnamese</Link>
            </div>
          </NavDropdown>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/"><Button className="nav-button">Home</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/about"><Button className="nav-button">About</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/team"><Button className="nav-button">Teams</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/resource"><Button className="nav-button">Resource</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/donate"><Button className="nav-button">Sponsor</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-lg-none">
            <Button as="a" variant="dark" className="nav-button" onClick={handleShow}>
              <span className="material-icons-outlined">menu</span>
            </Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
    
    <Offcanvas show={show} onHide={handleClose} data-bs-theme="dark" className="dark">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="ms-3"><Link href="/">
          <img src={logo.src} height={logoHeight} className="d-inline-block align-top me-2" alt="Logo"></img>
          
        </Link></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          <Link onClick={handleClose} href="/"><Button className="nav-button">Home</Button></Link>
          <Link onClick={handleClose} href="/about"><Button className="nav-button">About</Button></Link>
          <Link onClick={handleClose} href="/team"><Button className="nav-button">Teams</Button></Link>
          <Link onClick={handleClose} href="/resource"><Button className="nav-button">Resource</Button></Link>
          <Link onClick={handleClose} href="/donate"><Button className="nav-button">Sponsor</Button></Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}