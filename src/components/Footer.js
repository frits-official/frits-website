import { Container, Row, Col } from "react-bootstrap";
import "./css/footer.css"
import logo from "../../public/logo-no-back-yes-universe.png"
import logoFPT from "../../public/logo-fpt.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default function Footer() {
    const t = useTranslations('basicLayout.footer');
    return (<>
      <Container fluid id="foot" className="dark py-5">
        <Row className="align-items-center">
          <Col sm={{span: 3, offset: 1}} className="d-lg-flex d-none me-4">
            <a className="d-block me-4 my-auto rounded" target="_blank" rel="noreferrer" href="https://hoalac-school.fpt.edu.vn/"><img src={logoFPT.src} height='90rem' className="rounded"></img></a>
            <Link href='/'><img src={logo.src} height='120rem' className="d-block rounded"></img></Link>
          </Col>  
          <Col sm={{span: 3, offset: 1}} className="d-lg-none text-center">
            <a className="rounded" target="_blank" rel="noreferrer" href="https://hoalac-school.fpt.edu.vn/"><img src={logoFPT.src} height='90rem' className="rounded"></img></a>
            <Link href='/'><img src={logo.src} height='120rem' className="rounded"></img></Link>
          </Col>  
          <Col sm={{span: 4, offset: 0}} className="d-md-block d-none text-center">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/fschool.robotics"><FontAwesomeIcon icon={faFacebook} size="2x" className="me-2"/></a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ftc25209_fritsss/"><FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2"/></a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@FRITSRoboticsClub"><FontAwesomeIcon icon={faYoutube} size="2x" className="ms-2"/></a>
          </Col>
          <Col sm={{span: 4, offset: 0}} className="d-md-none text-center my-3">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/fschool.robotics"><FontAwesomeIcon icon={faFacebook} size="2x" className="me-2"/></a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ftc25209_fritsss/"><FontAwesomeIcon icon={faInstagram} size="2x" className="mx-2"/></a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@FRITSRoboticsClub"><FontAwesomeIcon icon={faYoutube} size="2x" className="ms-2"/></a>
          </Col>
          <Col sm={{span: 3, offset: 0}} className="d-md-block d-none text-wrap">
            <h5>{t("thirdTitle")}</h5>
            <ul>
              <li><a className="text-break" href="mailto://fschool.roboticsclub@gmail.com" target="_blank" rel="noreferrer">Email: fschool.roboticsclub@gmail.com</a></li>
              <li><a href="https://www.google.com/maps/place/Tr%C6%B0%C6%A1%CC%80ng+THPT+FPT+H%C3%A0+N%E1%BB%99i/@21.0124167,105.5252892,15z/data=!4m14!1m7!3m6!1s0x3135abc60e7d3f19:0x2be9d7d0b5abcbf4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgSMOgIE7hu5lp!8m2!3d21.0124167!4d105.5252892!16s%2Fm%2F02rsytm!3m5!1s0x31345bbfd675f23f:0x687158968ee822d6!8m2!3d21.0133697!4d105.5234187!16s%2Fg%2F11c42ks68d?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">{t('address')}</a></li>
            </ul>
          </Col>
          <Col sm={{span: 3, offset: 0}} className="d-md-none text-center mt-1">
            <h5>{t("thirdTitle")}</h5>
            <ul>
              <li><a href="mailto://fschool.roboticsclub@gmail.com" target="_blank" rel="noreferrer">Email: fschool.roboticsclub@gmail.com</a></li>
              <li><a href="https://www.google.com/maps/place/Tr%C6%B0%C6%A1%CC%80ng+THPT+FPT+H%C3%A0+N%E1%BB%99i/@21.0124167,105.5252892,15z/data=!4m14!1m7!3m6!1s0x3135abc60e7d3f19:0x2be9d7d0b5abcbf4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgSMOgIE7hu5lp!8m2!3d21.0124167!4d105.5252892!16s%2Fm%2F02rsytm!3m5!1s0x31345bbfd675f23f:0x687158968ee822d6!8m2!3d21.0133697!4d105.5234187!16s%2Fg%2F11c42ks68d?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">{t('address')}</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>)
}