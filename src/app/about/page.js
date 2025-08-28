import { Container } from "react-bootstrap"
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

  return (<Container>
    about club, history and achievement
  </Container>)
}
