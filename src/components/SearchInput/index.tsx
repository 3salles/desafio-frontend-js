import Icon, { iconName } from "../Icon";

interface SearchInputProps {
  placeholder: string
  icon?: iconName
  className?: string
  color?: string
}

export default function SearchInput ({ placeholder, icon, color, className = ''}: SearchInputProps) {
  return(
    <div className={'flex items-center border-b border-grey-500 w-5/12 ' + className}>
      <Icon size={20} name="search" color={color} />
      <input className="bg-transparent p-1.5 focus:shadow-outline focus:outline-none text-base-white flex-1" type="text" placeholder={placeholder} />
      {icon && (
        <button className="focus:outline-none p-1">
          <Icon size={20} name={icon} />
        </button>
      )}
    </div>
  )
}
