import Link from "next/link";
import Image from "next/image"

interface ClassName {
  className: string
}

export default function Header({ className }: ClassName) {
  return (
    <header className={'flex pt-3 w-full justify-between ' + className}>
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

      <div className="flex items-center space-x-4 lg:space-x-6">
        <button></button>
        <button className="flex w-6 h-6 xs:h-8 xs:w-8 relative">
          <Image
            className="rounded-full"
            src="/assets/profile-icon.png"
            layout="fill"
          />
        </button>
      </div>
    </header>

  )
}
