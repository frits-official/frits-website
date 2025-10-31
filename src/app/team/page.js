import { Container, Row, Col } from "react-bootstrap"
import "./team.css"
import { useTranslations } from "next-intl"
import { getLocale, getTranslations } from "next-intl/server"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'team.metadata' });

  return {
    title: t('title', {clubName: 'FPTSchool Robotics, Information Technology and Science Club - FRITS'}),
    description: t('description')
  }
}

export default function Page() {
  const t = useTranslations("team.page")

  return (<Container className="mt-4">
    <Row>
      <Col sm={{span: 4, offset: 2}} className="text-center border-end">
        <img src="/assets/FTC.svg" height="110px" width="80%" className="mb-4"/>
        sldkfnskdlnjkds
      </Col>
      <Col sm={{span: 4, offset: 0}} className="text-center">
        <img src="/assets/VEXV5.svg" height="110px" width="80%" className="mb-4"/>
        ksefksjenfkjsdnfkjsndkj
      </Col>
    </Row>
  </Container>)
}
