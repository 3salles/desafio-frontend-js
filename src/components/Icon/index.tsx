import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'
import { icons } from '../../utils/icons'

const defaultConfig = resolveConfig(tailwindConfig)

export type iconName = keyof typeof icons

interface IconProps {
  name: iconName
  color?: string
  size?: number | string
  className?: string
}

export default function Icon({
  name, color = defaultConfig.theme.colors.base.white,
  size = 24,
  className = ''}: IconProps
  ){
    const noEvenood = ['videos']
  return (
    <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
      {icons[name].map((path, id) => (
        <path
        fillRule={noEvenood.includes(name) ? 'nonzero' : 'evenodd'}
        key={id}
        d={path}
        fill={color}
        />
      ))}
    </svg>
  )
}
