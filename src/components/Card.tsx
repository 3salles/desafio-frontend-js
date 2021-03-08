import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import Icon from "./Icon";

interface CardContent {
  image: string
  tag: "interno" | "confidencial"
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
}

const defaultConfig = resolveConfig(tailwindConfig)

export default function Card ({ cardContent}: CardProps) {
  const tagClass = (cardContent['tag'] === "confidencial" ? "text-orange-500" : "text-success-500")

  return (
    <>
    {cardContent.map((content) => (
      <div className={content.card_class} >
      <Link href="/post">
        <a className="relative w-full flex flex-col">
          <span className={'xs:hidden opacity-80 rounded-br rounded-tl absolute top-0 left-0 z-10 px-4 bg-base-white uppercase text-xs tracking-wider ' + tagClass}>
            {content.tag}
          </span>
          <Image
          className="rounded"
          layout="responsive"
          src={content.image}
          width="336"
          height="195"
          />
          <div className="flex rounded-full bg-base-white opacity-80 absolute bottom-4 right-4 px-2 py-0.5 items-center">
            <Icon size={14} name={content.icon_name} color={defaultConfig.theme.colors.action[600]}/>
            <div className="border-l border-action-600 mx-2 h-3"/>
            <span className="text-action-600 text-xs">
              {content.metric}
            </span>
          </div>

          {content.percentage && (
            <div className="absolute bottom-0 left-0 w-full h-1">
              <div className="bg-action-600 w-full h-full rounded-b">
                <div
                className={'bg-vibrant-500 h-full ' + (content.percentage === 100 ? 'rounded-b' : 'rounded-bl') }
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
          <div className="border-l border-grey-500 mx-2 h-4"/>
          <Icon
          size={14}
          color={defaultConfig.theme.colors.grey[500]}
          name="clock"
          />
          <span className="ml-1">+ {content.averageTime} min</span>
          </>
        )}
      </div>
    </div>
    ))}
</>

  )
}
