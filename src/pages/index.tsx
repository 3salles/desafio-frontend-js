import Head from 'next/head'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

export default function Home() {
  return (
    <div>
      <Head>
        <title>MOBRJ</title>
      </Head>
    <main>
    <h1>MOBRJ</h1>
    </main>
    </div>
  )
}
