import { Container } from "react-bootstrap"
import "./home.css"
import { useTranslations } from "next-intl"
import { getLocale, getTranslations } from "next-intl/server"

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
    <Container className="under mt-5">
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
      lol<br/>
    </Container>
  </>)
}
