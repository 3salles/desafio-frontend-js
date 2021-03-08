import Head from 'next/head'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import navbarLinks from '../utils/links.json'



export default function Home () {
  return (
    <>
      <Head>
        <title>MOBRJ</title>
      </Head>

      <div className="3xl:container mx-auto pb-16 lg:pb-0 lg:flex">
        <Navbar links={navbarLinks}/>
        <div className="flex-1">
          <div className="relative">
            {/* <Header className="absolute z-10 px-5 sm:px-8 xl:px-16 items-center"/> */}
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
                loop: false
              }}
            >
              <div className="h-74 lg:h-84 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./assets/carousel-image.png")' }}>
                <div className="flex flex-col h-full w-full text-base-white px-5 sm:px-8 xl:px-16 py-8 xl:pb-12 pt-20 xl:pt-28">
                  <h1 className="text-2xl mb-2 tracking-wider lg:text-2xl md:w-6/12 lg:w-full xl:w-5/12">
                    <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                    consectetuer adipiscing.
                  </h1>
                  <p className="text-sm leading-6 line-clamp-1 xs:line-clamp-2 md:w-5/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                  </p>

                  <button
                    className="ml-auto mt-auto w-max py-3 px-6 xl:px-7 bg-gradient-to-r from-action-500 to-action-600 text-xs md:text-sm rounded tracking-widest"
                  >
                    VER MAIS
                  </button>
                </div>
              </div>
              <div className="h-74 lg:h-84 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./assets/carousel-image.png")' }}>
                <div className="flex flex-col h-full w-full text-base-white px-5 sm:px-8 xl:px-16 py-8 xl:pb-12 pt-20 xl:pt-28">
                  <h1 className="text-2xl mb-2 tracking-wider lg:text-2xl md:w-6/12 lg:w-full xl:w-5/12">
                    <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                    consectetuer adipiscing.
                  </h1>
                  <p className="text-sm leading-6 line-clamp-1 xs:line-clamp-2 md:w-5/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                  </p>

                  <button
                    className="ml-auto mt-auto w-max py-3 px-6 xl:px-7 bg-gradient-to-r from-action-500 to-action-600 text-xs md:text-sm rounded tracking-widest"
                  >
                    VER MAIS
                  </button>
                </div>
              </div>
              <div className="h-74 lg:h-84 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("./assets/carousel-image.png")' }}>
                <div className="flex flex-col h-full w-full text-base-white px-5 sm:px-8 xl:px-16 py-8 xl:pb-12 pt-20 xl:pt-28">
                  <h1 className="text-2xl mb-2 tracking-wider lg:text-2xl md:w-6/12 lg:w-full xl:w-5/12">
                    <span className="text-vibrant-500">Lorem</span> ipsum dolor sit amet,
                    consectetuer adipiscing.
                  </h1>
                  <p className="text-sm leading-6 line-clamp-1 xs:line-clamp-2 md:w-5/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu suspendisse vel sed vulputate et leo tincidunt.
                  </p>

                  <button
                    className="ml-auto mt-auto w-max py-3 px-6 xl:px-7 bg-gradient-to-r from-action-500 to-action-600 text-xs md:text-sm rounded tracking-widest"
                  >
                    VER MAIS
                  </button>
                </div>
              </div>
            </Carousel>
          </div>


        </div>
      </div>
    </>
  )
}
