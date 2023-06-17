import Head from 'next/head';

import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import Intro from '@/components/Intro';
import Footer from '@/components/Footer';
import ConnectUs from '@/components/ConnectUs';
import Team from '@/components/Team';
import Events from '@/components/Events';
import UnitsFieldsServices from '@/components/UnitsFieldsServices';

import UnitsFieldsServices_Mobile from '@/components/UnitsFieldsServices_Mobile';
import MobileMenu from '@/components/MobileHeader';
import Team_Mobile from '@/components/Team_Mobile';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>עמותת בוגרי מערך ההגנה בסייבר</title>
        <meta
          name="description"
          content="עמותת בוגרי מערך ההגנה בסייבר"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main>
        <Header />
        <MobileMenu />
        <Intro />

        <UnitsFieldsServices />
        <UnitsFieldsServices_Mobile />
        <Events />
        <Team />
        <Team_Mobile />
        <ConnectUs />
        <Footer />
      </main>
    </>
  );
}
