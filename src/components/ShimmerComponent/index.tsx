import LoadingCarousel from '../Shimmer/LoadingCarousel'
import Trending from '../Trending'
import CardComponent from '../CardComponent'

import recommended from '../../utils/recommended.json'
import suggestions from '../../utils/suggestions.json'

interface ShimmerComponentProps {
  isLoading: boolean
}

export default function ShimmerComponent({ isLoading }: ShimmerComponentProps) {
  return (
    <div className="3xl:container mx-auto pb-16 lg:pb-0 lg:flex">
      <div className="flex-1">
        <div className="relative">
          <LoadingCarousel />
        </div>
        <div className="my-4">
          <Trending isLoading={isLoading} />
        </div>
        <section className="px-5 sm:px-8 xl:px-16 pb-8 md:pb-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-y-6 gap-x-4">
            <CardComponent cardContent={recommended} isLoading={isLoading} />
          </div>
        </section>
        <section className="bg-grey-50 shadow-sm py-8 pl-5 w-full sm:pl-8 md:py-10 xl:pl-16 animate-pulse">
          <div className="bg-grey-300 p-1 w-1/4 rounded my-2" />
          <LoadingCarousel />
        </section>
        <section className="px-5 sm:px-8 xl:px-16 pb-8 md:pb-10">
          <div className="bg-grey-300 p-1 w-1/4 rounded my-2" />
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-y-6 gap-x-4">
            <CardComponent cardContent={suggestions} isLoading={isLoading} />
          </div>
        </section>
        <section className="px-5 sm:px-8 xl:px-16 pb-8 md:pb-10">
          <div className="bg-grey-300 p-1 w-1/4 rounded my-2" />
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-y-6 gap-x-4">
            <CardComponent cardContent={suggestions} isLoading={isLoading} />
          </div>
        </section>
      </div>
    </div>
  )
}
