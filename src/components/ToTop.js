'use client'

import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ToTop() {
  const isBrowser = () => typeof window !== 'undefined'; 

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (<div className="d-flex justify-content-end">
    <Button
    variant="dark"
    className={`totop float-end me-3 mb-3 ms-auto fixed-bottom rounded-circle ${isVisible ? 'd-block' : 'd-none'}`}
    onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  </div>)
}