import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../public/logo-no-back.png"
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations, useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar({ handleShow }) {
  const t = useTranslations("basicLayout.nav")
  const locale = useLocale();
  const logoHeight = 60;
  return (
    <Navbar className={`dark rounded-bottom back`} sticky="top" id="top" data-bs-theme="dark">
      <Container fluid className="px-3">
        <Navbar.Brand className="ms-5 d-md-none">
          <Link href="/">
            <img src={logo.src} height={logoHeight} className="d-inline-block align-top me-2" alt="Logo"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className="ms-5 ps-5 d-md-block d-none">
          <Link href="/">
            <img src={logo.src} height={logoHeight} className="d-inline-block align-top me-2" alt="Logo"></img>
          </Link>
        </Navbar.Brand>
        <Nav className="float-end">
          <LocaleSwitcher
            currentValue={locale}
            items={[
              {
                value: 'en',
                label: t('en')
              },
              {
                value: 'vi',
                label: t('vi')
              }
            ]}/>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/"><Button className="nav-button">{t('home')}</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/about"><Button className="nav-button">{t('about')}</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/team"><Button className="nav-button">{t('teams')}</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/resource"><Button className="nav-button">{t('resource')}</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-none d-lg-block">
            <Link href="/sponsor"><Button className="nav-button">{t('sponsor')}</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-3 d-lg-none">
            <Button as="a" variant="dark" className="nav-button" onClick={handleShow}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
    )
}