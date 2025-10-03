import { Container, Row, Col } from "react-bootstrap"
import "./about.css"
import { useTranslations } from "next-intl"
import { getLocale, getTranslations } from "next-intl/server"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'about.metadata' });

  return {
    title: t('title', {clubName: 'FPTSchool Robotics, Information Technology and Science Club - FRITS'}),
    description: t('description')
  }
}

export default function Page() {
  const t = useTranslations("about.page")

  return (<Container className="mt-4">
    <Row>
      <Col sm={{span: 4, offset: 1}} className="d-flex justify-content-center">
        <FirstImg src="/assets/full.jpg"/>
      </Col>
      <Col sm={{span: 6, offset: 0}} className="mt-3 mt-md-0 introline text-center text-sm-start d-flex align-items-center">
        <div>
          <h1 className="mb-3">FPTSchool Robotics, Information Technology & Science Club</h1>
          {t('clbdesc')}
        </div>
      </Col>
    </Row>
    <hr className="w-75 mx-auto mt-4 mb-5"/>
    <Row>
      <Col sm={{span: 4}}>
        <FirstImg src="/assets/comp.jpg" dim>number of competition</FirstImg>
      </Col>
      <Col sm={{span: 4}}>
        <FirstImg src="/assets/award.jpg" dim>number of award</FirstImg>
      </Col>
      <Col sm={{span: 4}}>
        <FirstImg src="/assets/outreach.jpg" dim>number of outreach</FirstImg>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col sm={{span: 4, offset: 2}}>
        <FirstImg src="/assets/comp.jpg" dim>number of member through years</FirstImg>
      </Col>
      <Col sm={{span: 4}}>
        <FirstImg src="/assets/award.jpg" dim>number of reach on social media (follow)</FirstImg>
      </Col>
    </Row>
  </Container>)
}

function FirstImg({src, dim = false, children}) {
  if (!dim) return (<div style={{backgroundImage: 'url("' + src + '")'}} className="firstimg rounded d-flex align-items-center justify-content-center">{children}</div>);
  else return (<div className="w-100 h-100">
    <div style={{backgroundImage: 'url("' + src + '")'}} className="firstimg rounded">
      <div className="w-100 h-100 dim d-flex align-items-center justify-content-center rounded">{children}</div>
    </div>
  </div>)
}
