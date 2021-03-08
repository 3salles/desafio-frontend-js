import Head from 'next/head'
import Carousel from '../components/Carousel'
import MainCarouselItem from '../components/MainCarouselItem'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import navbarLinks from '../utils/links.json'
import Trending from '../components/Trending'
import Card from '../components/Card'
import Icon from '../components/Icon'
import recommended from '../utils/recommended.json'


import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

const defaultConfig = resolveConfig(tailwindConfig)

export default function Home() {
  return (
    <>
      <Head>
        <title>MOBRJ</title>
      </Head>

      <div className="3xl:container mx-auto pb-16 lg:pb-0 lg:flex">
        <Navbar links={navbarLinks} />
        <div className="flex-1">
          <div className="relative">
            <Header className="absolute z-10 px-5 sm:px-8 xl:px-16 items-center" />
            <Carousel
              slideHeightClass="h-74 lg:h-84"
              arrows={{
                show: true
              }}
              dots={{
                show: true
              }}
              options={{
                rubberband: false,
                loop: true,
                duration: 1000
              }}
            >
              <MainCarouselItem />
              <MainCarouselItem />
              <MainCarouselItem />
            </Carousel>
          </div>
          <main>
            <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between pt-4 pb-6 md:pt-10">
              <Trending />
              <hr className="w-full border-grey-300 md:hidden" />
              <h2 className="px-5 sm:px-8 text-grey-800 text-lg mt-8"> Recomendados</h2>
            </div>

            <section className="px-5 sm:px-8 pb-8">
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-6 gap-x-4">
              <Card
              cardContent={recommended}
              />
              </div>

              <button className="text-action-600 text-sm w-full leading-6 xs:hidden mt-8">
                Ver mais
              </button>
            </section>
          </main>


        </div>
      </div>
    </>
  )
}
