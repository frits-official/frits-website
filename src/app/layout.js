import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import './layout.css'
import 'material-icons/iconfont/material-icons.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Footer from '../components/Footer';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Montserrat } from "next/font/google";
import Head from 'next/head';
const montserrat = Montserrat({ subsets: ["latin", "latin-ext", "vietnamese"]});

import {getLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations({ locale, namespace: 'home.metadata' });

  return {
    title: t('title', {clubName: 'FPTSchool Robotics, Information Technology and Science Club - FRITS'}),
    description: t('description')
  }
}

export default async function RootLayout({ children }) {
  const locale = await getLocale()
  return (
    <html lang={locale}>
      <Head>
        <meta name="apple-mobile-web-app-title" content="FRITS" />
      </Head>
      <body className={montserrat.className}>
        <NextIntlClientProvider>
          <Navigation/>
          <Container fluid>
            {children}
          </Container>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
