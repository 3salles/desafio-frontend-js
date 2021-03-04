import { Fragment, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


interface Links {
  title: string
  url: string
}



interface NavbarProps {
  // children: ReactNode;
  links: Links[]
}




export default function Navbar({ links }: NavbarProps) {
  const { pathname } = useRouter()
  return (
    <>
    <aside className="fixed bottom-0 left-0 z-40 w-full lg:w-66 lg:relative lg:border-r lg:border-grey-300">
    <div className="lg:sticky lg:top-0 lg:left-0 lg:overflow-x-hidden">
    <nav
      className="flex bg-base-white w-full justify-between px-3 xs:px-5 sm:px-8 py-1 shadow-mobile lg:flex-col lg:shadow-none lg:bg-transparent lg:px-8 lg:py-6"
    >
        {links.map((link) => (
          <Fragment key={link.title}>
            <Link href={link.url}>
              <a className={
                'flex flex-col items-center rounded p-1 lg:bg-transparent' +
                (link.url === pathname ? 'bg-action-50' : '')
              }>
                <span className={
                  'min-w-55 w-full text-center text-xs whitespace-nowrap leading-4 mt-0.5 lg:text-sm lg:text-left lg:mt-0 ' +
                  (link.url === pathname ? 'text-action-600 ' : 'text-grey-500 ')
                  }>
                  {link.title}
                </span>
              </a>
            </Link>
          </Fragment>
        ))}
      </nav>
    </div>
    </aside>
    </>
  )
}
