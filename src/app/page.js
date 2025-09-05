import { Container, Row, Col } from "react-bootstrap"
import "./home.css"
import { useTranslations } from "next-intl"
import { getLocale, getTranslations } from "next-intl/server"
import Link from "next/link"

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'home.metadata' });

  return {
    title: t('title', {clubName: 'FPTSchool Robotics, Information Technology and Science Club - FRITS'}),
    description: t('description')
  }
}

export default function Page() {
  const t = useTranslations("home.page")

  return (<>
    <div className="banner"></div>
    <div className="bannercontent d-flex align-items-center justify-content-center pb-5">
      <div className="pb-5 text-center">
        <h1><b>FPTSchool Robotics,<br/>Information Technology & Science Club</b></h1>
        <p className="pt-3">{t('banner')}</p>
      </div>
    </div>
    
    <Container className="mt-5">
      <h2 className="text-center mb-4"><b>{t('landing.title')}</b></h2>
      <Row>
        <Tile sm={{span: 4}} background='/assets/teams.jpg' href="/team">
          {t('landing.teams')}
        </Tile>
        <Tile sm={{span: 4}} background='/assets/about.jpg' href="/about">
          {t('landing.about')}
        </Tile>
        <Tile sm={{span: 4}} background='/assets/resource.jpg' href="/resource">
          {t('landing.resource')}
        </Tile>
      </Row>
    </Container>
  </>)
}

function Tile({ sm, children, background, className, href }) {
  return (<Col sm={sm}>
    <div
  className={"tile d-flex align-items-center justify-content-center mb-3 rounded " + className}
  style={{ backgroundImage: `url(${background})` }}>
    <Link href={href} className="tilebefore d-flex align-items-center justify-content-center">
        <h3><b>{children}</b></h3>
    </Link>
    </div>
  </Col>)
}