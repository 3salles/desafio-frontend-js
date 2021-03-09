import Head from 'next/head'
import Carousel from '../components/Carousel'
import MainCarouselItem from '../components/MainCarouselItem'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import navbarLinks from '../utils/links.json'
import Trending from '../components/Trending'
import Card from '../components/Card'
import recommended from '../utils/recommended.json'
import suggestions from '../utils/suggestions.json'



import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import CarouselItem1 from '../components/CarouselItem1'
import CarouselItem2 from '../components/CarouselItem2'
import CarouselItem3 from '../components/CarouselItem3'
import CarouselItem4 from '../components/CarouselItem4'


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
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-y-6 gap-x-4">
              <Card cardContent={recommended} />
              </div>
              <button className="text-action-600 text-sm w-full leading-6 xs:hidden mt-8">
                Ver mais
              </button>
            </section>
            <section className="bg-gradient-to-bl from-vibrant-50 to-vibrant-100 py-8 pl-5 w-full sm:pl-8 md:py-10 xl:pl-16">
              <h2 className="text-grey-800 text-lg mb-6">Conteúdos especiais</h2>
              <Carousel
                slideHeightClass="h-66"
                options={{
                  spacing: 16,
                  slidesPerView: 1.4,
                  loop: false,
                  rubberband: false,
                  breakpoints: {
                    '(min-width: 1025px)': {
                      slidesPerView: 2.25
                    },
                    '(min-width: 1441px)': {
                      slidesPerView: 3.25
                    },
                    '(min-width: 1536px)': {
                      slidesPerView: 4.25
                    }
                  }
                }}
              >
                <CarouselItem1 />
                <CarouselItem2 />
                <CarouselItem3 />
                <CarouselItem4 />
              </Carousel>
            </section>

            <section className="px-5 py-8 sm:px-8">
              <h2 className="text-grey-800 text-lg mb-6">
                Você também pode gostar de:
              </h2>

              <div className="grid grid-cols-1 gap-y-6 gap-x-4">
                <Card cardContent={suggestions} />
              </div>

            </section>
          </main>


        </div>
      </div>
    </>
  )
}
