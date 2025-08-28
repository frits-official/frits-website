import { Button, Offcanvas, Stack } from "react-bootstrap";
import logo from "../../public/logo-no-back.png"
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Sidebar({ show, handleClose }) {
  const t = useTranslations("basicLayout.nav")
  const logoHeight = 60;
  return (
    <Offcanvas show={show} onHide={handleClose} data-bs-theme="dark" className="dark">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="ms-3"><Link href="/">
          <img src={logo.src} height={logoHeight} className="d-inline-block align-top me-2" alt="Logo"></img>
        </Link></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          <Link onClick={handleClose} href="/"><Button className="nav-button">{t('home')}</Button></Link>
          <Link onClick={handleClose} href="/about"><Button className="nav-button">{t('about')}</Button></Link>
          <Link onClick={handleClose} href="/team"><Button className="nav-button">{t('teams')}</Button></Link>
          <Link onClick={handleClose} href="/resource"><Button className="nav-button">{t('resource')}</Button></Link>
          <Link onClick={handleClose} href="/sponsor"><Button className="nav-button">{t('sponsor')}</Button></Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}