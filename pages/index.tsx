import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import About from '../components/home-page/about'
import CryptoCraig from '../components/home-page/crypto-craig'
import EmailMarketing from '../components/home-page/email-marketing'
import ChicksDoodles from '../components/home-page/doodles'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <About />
      <div className='grid md:grid-cols-2 md:gap-10'>
        <CryptoCraig />
        <EmailMarketing />
      </div>
      <ChicksDoodles />
      
    </Layout>
  )
}
