import Head from 'next/head'




import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

import { useEffect, useState } from 'react'
import ShimmerComponent from '../components/ShimmerComponent'
import ContentComponent from '../components/ContentComponent'



const defaultConfig = resolveConfig(tailwindConfig)


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <title>MOBRJ</title>
      </Head>

      {isLoading ? (
        <>
          <ShimmerComponent isLoading={isLoading} />
        </>
      ) : (
          <ContentComponent />
        )}
    </>
  )
}
