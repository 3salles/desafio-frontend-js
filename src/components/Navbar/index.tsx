import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindcss from '../../../tailwind.config'

import Icon , { iconName } from '../Icon'


interface Links {
  icon: iconName
  title: string
  otherTitle?: string
  url: string
  subOptions?: Array<Pick<SubOptions, 'title' | 'url'>>
}

interface SubOptions {
  title: string
  url: string
}
interface NavbarProps {
  links: Links[]
}

const defaultConfig = resolveConfig(tailwindcss)

export default function Navbar({ links }: NavbarProps) {
  const { pathname } = useRouter()
  return (
    <>
    <aside className="fixed bottom-0 left-0 z-40 w-full lg:w-66 lg:relative lg:border-r lg:border-grey-300">
    <div className="lg:sticky lg:top-0 lg:left-0 lg:overflow-x-hidden">
    <nav
      className="flex bg-base-white w-full justify-between px-3 xs:px-5 sm:px-8 py-1 shadow-sm lg:flex-col lg:shadow-none lg:bg-transparent lg:px-8 lg:py-6"
    >
        {links.map((link) => (
          <Fragment key={link.title}>
            <Link href={link.url}>
            <a
              className={
                'flex flex-col items-center rounded p-1 lg:bg-transparent ' +
                (link.url === pathname ? 'bg-action-50 ' : '') +
                (link.subOptions ? 'lg:border-t lg:border-grey-300 lg:mt-4.5 lg:pt-6 lg:mb-1' : 'lg:mb-0.5')
              }
            >
                <Icon
                className="lg:hidden"
                color={link.url === pathname ? defaultConfig.theme.colors.action[600] : defaultConfig.theme.colors.grey[500]}
                name={link.icon}
              />
                <span
                className={
                  'min-w-55 w-full text-center text-xs whitespace-nowrap leading-4 mt-0.5 lg:text-sm lg:text-left lg:mt-0 ' +
                  (link.otherTitle ? 'lg:hidden ' : '') +
                  (link.url === pathname ? 'text-action-600 ' : 'text-grey-500 ') +
                  (link.subOptions ? 'lg:text-brand-500 lg:uppercase lg:text-xs lg:tracking-wider' : '')
                }
              >
                  {link.title}
                </span>
                {link.otherTitle && (
                <span
                  className={
                    'hidden lg:inline min-w-55 w-full text-center text-xs whitespace-nowrap leading-4 mt-0.5 lg:text-sm lg:text-left lg:mt-0 ' +
                    (link.url === pathname ? 'text-action-600 ' : 'text-grey-500 ') +
                    (link.subOptions ? 'lg:text-brand-500 uppercase lg:text-xs tracking-wider' : '')
                  }
                >
                    {link.otherTitle}
                  </span>
                )}
              </a>
            </Link>

            {link.subOptions?.filter((_, idx) => idx < 3).map((subOption) => (
              <Link href={subOption.url} key={subOption.title}>
                <a className={'hidden lg:inline text-grey-500 text-sm p-1 mb-0.5'}>
                  {subOption.title}
                </a>
              </Link>
            ))}

            {link.subOptions?.length > 3 && (
              <Link href={link.url}>
                <a className='hidden lg:flex items-center mt-1 ml-4.5 text-xs text-action-600'>
                  Ver todas
                  <Icon
                    className="ml-1"
                    size={16}
                    color={defaultConfig.theme.colors.action[600]}
                    name="arrow-right"
                  />
                </a>
              </Link>
            )}
          </Fragment>
        ))}
      </nav>
    </div>
    </aside>
    </>
  )
}
