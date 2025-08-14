import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navigation from './_component/navigation';
import './layout.css'
import 'material-icons/iconfont/material-icons.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Footer from './_component/footer';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin", "latin-ext", "vietnamese"]});

export const metadata = {
  robots: { index: false, follow: false },
  verification: {
    google: 'Qn2YNNz6voDE9SC5ARW3mp4SFu5OOId2FjHQf6pp6DM',
  },
  title: 'Home | FPTSchool Robotics, Information Technology and Science Club - FRITS',
  description: 'FPTSchool Robotics, Information Technology and Science Club - FRITS is a robotics & STEAM club in Ha Noi, Vietnam. Founded by FPT Ha Noi High School students from 2016, the club had competed in many competition in the world, and alo had held many outreach activities to spread the STEAM spirit to all region in Vietnam.',
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation/>
        <Container fluid>
          {children}
        </Container>
        <Footer/>
      </body>
    </html>
  )
}
