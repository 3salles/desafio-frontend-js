import Head from 'next/head'
import Carousel from '../components/Carousel'
import MainCarouselItem from '../components/MainCarouselItem'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import navbarLinks from '../utils/links.json'
import Trending from '../components/Trending'
import Card from '../components/Card'
import Icon from '../components/Icon'


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
              <div className=" grid grid-cols-1 gap-y-6 gap-x-4">
              <Card cardContent={{
                averageTime:4,
                icon: () => <Icon size={14} name="videos" color={defaultConfig.theme.colors.action[600]}/>,
                category: 'Produtos',
                metric: '10:45',
                image: '/assets/man.png',
                tag: 'confidencial',
                title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e',
                percentage: 60
              }}/>
              <Card cardContent={{
                averageTime:8,
                icon: () => <Icon size={14} name="videos" color={defaultConfig.theme.colors.action[600]}/>,
                category: 'Produtos',
                metric: '13:20',
                image: '/assets/journalist.png',
                tag: 'interno',
                title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e',
                percentage: 37
              }}/>
              <Card cardContent={{
                icon: () => <Icon size={14} name="slides" color={defaultConfig.theme.colors.action[600]}/>,
                category: 'Produtos',
                metric: '12 slides',
                image: '/assets/grains.png',
                tag: 'interno',
                title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing e'
              }}/>
              </div>


            </section>
          </main>


        </div>
      </div>
    </>
  )
}
