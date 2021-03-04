import Link from "next/link";
import Image from "next/image"
import Icon from "./Icon";
import SearchInput from "./SearchInput";

interface ClassName {
  className: string
}

export default function Header({ className }: ClassName) {
  return (
    <header className={'flex pt-3 w-full justify-between' + className}>
      <Link href="/">
        <a className="flex lg:hidden">
          <Image
            alt="Next Logo"
            src="/assets/logo.png"
            layout="fixed"
            width={115}
            height={29}
          />
        </a>
      </Link>

      <SearchInput
      className="hidden lg:flex"
      placeholder="Pesquisar"
      icon="filter"
      />

      <div className="flex items-center space-x-4 lg:space-x-6">
        <button className="lg:hidden">
          <Icon
            name="search"
            size={24}
          />
        </button>
        <button className="hidden lg:block">
          <Icon
          name="help"
          size={24}
          />
        </button>
        <button className="hidden lg:block">
          <Icon
          name="notification"
          size={24}
          />
        </button>
        <button className="flex w-6 h-6 xs:h-8 xs:w-8 relative">
          <Image
            className="rounded-full"
            src="/assets/profile-icon.png"
            layout="fill"
          />
          <div className="absolute sm:top-3 sm:left-4 sm:h-2 sm:w-2 my-1 border-2 border-transparent rounded-full bg-orange-700 z-2"></div>
        </button>
      </div>
    </header>

  )
}
