'use client'

import { useEffect, useState } from "react";
import "./css/navbar.css"
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

export default function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavigationBar handleShow={handleShow}/>
      <Sidebar show={show} handleClose={handleClose}/>
  </>
  )
}