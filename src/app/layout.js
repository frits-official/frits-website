import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';
import '../../public/global.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Footer from '../components/Footer';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Montserrat } from "next/font/google";
import Head from 'next/head';
const montserrat = Montserrat({ subsets: ["latin", "latin-ext", "vietnamese"]});

import {getLocale} from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import ToTop from '../components/ToTop';

export default async function RootLayout({ children }) {
  const locale = await getLocale()
  return (
    <html lang={locale}>
      <Head>
        <meta name="apple-mobile-web-app-title" content="FRITS"/>
      </Head>
      <body className={montserrat.className}>
        <NextIntlClientProvider>
          <div className="page-container">
            <Navigation className="head"/>
            <div className="out">
              {children}
            </div>
            <ToTop/>
            <Footer className="foot"/>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
