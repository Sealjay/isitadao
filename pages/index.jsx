import Head from 'next/head'

import { CallToAction } from '@/../../components/CallToAction'
import { FAQs } from '@/../../components/Faqs'
import { Footer } from '@/../../components/Footer'
import { Header } from '@/../../components/Header'
import { Hero } from '@/../../components/Hero'
import { DAOCharacteristics } from '@/../../components/DAOCharacteristics'
import { SecondaryFeatures } from '@/../../components/SecondaryFeatures'
import { Tweets } from '@/../../components/Tweets'

export default function Home() {
  return (
    <>
      <Head>
        <title>IsItADAO? - Deconstructing everyone's favourite new toy</title>
        <meta
          name="description"
          content="Decentralized autonomous organizations... or DAOs for short. They definitely exist; but what problem are they solving? Do we already have a solution for these issues?"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <DAOCharacteristics />
        <SecondaryFeatures />
        <CallToAction />
        <Tweets />
        <FAQs />
      </main>
      <Footer />
    </>
  )
}
