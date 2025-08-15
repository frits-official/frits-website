'use client'

import { useEffect, useState } from "react";
import "./css/navbar.css"
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

export default function Navigation() {
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
      <NavigationBar scrolled={scrolled} handleShow={handleShow}/>
      <Sidebar show={show} handleClose={handleClose}/>
  </>
  )
}