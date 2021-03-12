import Head from 'next/head'
import Navbar from '../components/Navbar'
import linksNavbar from '../utils/links.json'

export default function Explore() {
  return (
    <>
      <Head>
        <title>Navegar | MOBRJ</title>
      </Head>
      <div className="3xl:container mx-auto pb-16 lg:pb-0 lg:flex">
        <Navbar links={linksNavbar} />
        <h1>NAVEGAR</h1>
      </div>
    </>
  )
}
