import Image from 'next/image'
import Link from 'next/link'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'
import Icon from '../Icon'
import { motion } from 'framer-motion'

interface CardContent {
  image: string
  tag: 'interno' | 'confidencial'
  icon_name: string
  metric: string
  title: string
  category: string
  averageTime?: number
  percentage?: number
  card_class?: string
}
interface CardProps {
  cardContent: CardContent[]
  isLoading: boolean
}

const defaultConfig = resolveConfig(tailwindConfig)

export default function CardComponent({ cardContent, isLoading }: CardProps) {
  return (
    <>
      {cardContent.map(content => (
        <>
          {isLoading ? (
            <div className={content.card_class}>
              <div className="bg-grey-300 h-40 rounded animate-pulse shadow-sm" />
              <div className="bg-grey-50 p-8  flex flex-col space-y-2 animate-pulse">
                <span className="bg-grey-500 p-1 w-full rounded" />
                <span className="bg-grey-500 p-1 w-1/4 rounded" />
              </div>
            </div>
          ) : (
            <motion.div
              className={content.card_class}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/post">
                <a className="relative w-full flex flex-col">
                  {content.tag === 'confidencial' ? (
                    <span
                      className={
                        'xs:hidden opacity-80 rounded-br rounded-tl absolute top-0 left-0 z-10 px-4 bg-base-white uppercase text-xs tracking-wider text-orange-500'
                      }
                    >
                      {content.tag}
                    </span>
                  ) : (
                    <span
                      className={
                        'xs:hidden opacity-80 rounded-br rounded-tl absolute top-0 left-0 z-10 px-4 bg-base-white uppercase text-xs tracking-wider text-success-500'
                      }
                    >
                      {content.tag}
                    </span>
                  )}

                  <Image
                    className="rounded"
                    layout="responsive"
                    src={content.image}
                    width="336"
                    height="195"
                  />
                  <div className="flex rounded-full bg-base-white opacity-80 absolute bottom-4 right-4 px-2 py-0.5 items-center">
                    <Icon
                      size={14}
                      name={content.icon_name}
                      color={defaultConfig.theme.colors.action[600]}
                    />
                    <div className="border-l border-action-600 mx-2 h-3" />
                    <span className="text-action-600 text-xs">
                      {content.metric}
                    </span>
                  </div>

                  {content.percentage && (
                    <div className="absolute bottom-0 left-0 w-full h-1">
                      <div className="bg-action-600 w-full h-full rounded-b">
                        <div
                          className={
                            'bg-vibrant-500 h-full ' +
                            (content.percentage === 100
                              ? 'rounded-b'
                              : 'rounded-bl')
                          }
                          style={{ width: `${content.percentage}%` }}
                        />
                      </div>
                    </div>
                  )}
                </a>
              </Link>
              <p className="text-sm text-grey-800 mt-4 mb-1 truncate">
                {content.title}
              </p>
              <div className="flex items-center text-grey-500 text-xs">
                <span>{content.category}</span>
                {content.averageTime && (
                  <>
                    <div className="border-l border-grey-500 mx-2 h-4" />
                    <Icon
                      size={14}
                      color={defaultConfig.theme.colors.grey[500]}
                      name="clock"
                    />
                    <span className="ml-1">+ {content.averageTime} min</span>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </>
      ))}
    </>
  )
}
