import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import Icon from "./Icon";

interface CardProps {
  cardContent: {
    image: string
    tag: "interno" | "confidencial"
    icon: FC
    metric: string
    title: string
    category: string
    averageTime?: number
    percentage?: number
  }
  className?: string
}

const defaultConfig = resolveConfig(tailwindConfig)

export default function Card ({ cardContent, className}: CardProps) {
  const tagClass = (cardContent.tag === "confidencial" ? "text-orange-500" : "text-success-500")

  return (
    <div className={className}>
      <Link href="/post">
        <a className="relative w-full flex flex-col">
          <span className={'xs:hidden opacity-80 rounded-br rounded-tl absolute top-0 left-0 z-10 px-4 bg-base-white uppercase text-xs tracking-wider ' + tagClass}>
            {cardContent.tag}
          </span>
          <Image
          className="rounded"
          layout="responsive"
          src={cardContent.image}
          width="336"
          height="195"
          />
          <div className="flex rounded-full bg-base-white opacity-80 absolute bottom-4 right-4 px-2 py-0.5 items-center">
            <cardContent.icon />
            <div className="border-l border-action-600 mx-2 h-3"/>
            <span className="text-action-600 text-xs">
              {cardContent.metric}
            </span>
          </div>

          {cardContent.percentage && (
            <div className="absolute bottom-0 left-0 w-full h-1">
              <div className="bg-action-600 w-full h-full rounded-b">
                <div
                className={'bg-vibrant-500 h-full ' + (cardContent.percentage === 100 ? 'rounded-b' : 'rounded-bl') }
                style={{ width: `${cardContent.percentage}%` }}
                />
              </div>
            </div>
          )}
        </a>
      </Link>
      <p className="text-sm text-grey-800 mt-4 mb-1 truncate">
        {cardContent.title}
      </p>
      <div className="flex items-center text-grey-500 text-xs">
        <span>{cardContent.category}</span>

        {cardContent.averageTime && (
          <>
          <div className="border-l border-grey-500 mx-2 h-4"/>
          <Icon
          size={14}
          color={defaultConfig.theme.colors.grey[500]}
          name="clock"
          />
          <span className="ml-1">+ {cardContent.averageTime} min</span>
          </>
        )}
      </div>
    </div>
  )
}
