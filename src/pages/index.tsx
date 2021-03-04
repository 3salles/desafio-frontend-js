import Head from 'next/head'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import Navbar from '../components/Navbar'
import navbarLinks from '../utils/links.json'

const fullConfig = resolveConfig(tailwindConfig)

export default function Home() {
  return (
    <div>
      <Head>
        <title>MOBRJ</title>
      </Head>
      <div>
        <Navbar links ={navbarLinks}/>
      </div>
    </div>
  )
}
