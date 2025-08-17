'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./home.css"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useTranslations } from "next-intl"

export async function generateMetadata() {
  return {
    title: 'FPTSchool Robotics, Information Technology and Science Club - FRITS'
  }
}

export default function Loading() {
  const t = useTranslations('basicLayout.other')
  return (<>
    <div className="banner"></div>
    <div className="bannercontent d-flex align-items-center justify-content-center pb-5">
      <div className="pb-5 text-center">
        <FontAwesomeIcon icon={faXmark} size="5x" className="mb-3"/>
        <p>{t('error')}</p>
      </div>
    </div>
  </>)
}
