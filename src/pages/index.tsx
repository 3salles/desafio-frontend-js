import Head from 'next/head'
import { useEffect, useState } from 'react'

import ShimmerComponent from '../components/ShimmerComponent'
import ContentComponent from '../components/ContentComponent'

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
