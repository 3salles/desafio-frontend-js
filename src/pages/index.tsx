import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import navbarLinks from '../utils/links.json'


export default function Home() {
  return (
    <>
      <Head>
        <title>MOBRJ</title>
      </Head>

      <div className="3xl:container mx-auto pb-16 lg:pb-0 lg:flex">
        <Navbar links ={navbarLinks} />

        <div className="flex-1">
          <div className="relative">

            <Header className="absolute z-10 px-5 sm:px-8 xl:px-16 items-center"/>
          </div>
        </div>
      </div>
    </>
  )
}
