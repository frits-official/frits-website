"use client"

import { NavDropdown } from "react-bootstrap"
import { useTransition } from "react";
import { setUserLocale } from "../services/locale";

export default function LocaleSwitcher({ currentValue, items }) {
  const [isPending, startTransition] = useTransition();

  function onClick(value) {
    const locale = value
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    (currentValue === "en") ? (
      <NavDropdown title={<span className="fi fi-gb pt-1"></span>}>
        <a className="ms-2 pointer" onClick={() => { onClick("vi") }}>
          <span className="fi fi-vn me-3"></span>{items[1].label}
        </a>
      </NavDropdown>
    ) : (
      <NavDropdown title={<span className="fi fi-vn pt-1"></span>}>
        <a className="ms-2 pointer" onClick={() => { onClick("en") }}>
          <span className="fi fi-gb me-3"></span>{items[0].label}
        </a>
      </NavDropdown>
    )
  )
}