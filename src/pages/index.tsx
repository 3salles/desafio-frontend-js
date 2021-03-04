import Head from 'next/head'
import Navbar from '../components/Navbar'
import navbarLinks from '../utils/links.json'


export default function Home() {
  return (
    <div>
      <Head>
        <title>MOBRJ</title>
      </Head>
      <div>
        <Navbar links ={navbarLinks} />
      </div>
    </div>
  )
}
