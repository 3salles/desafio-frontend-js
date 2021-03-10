import SearchInput from "./SearchInput";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwind from '../../tailwind.config'

const defaultConfig = resolveConfig(tailwind)

export default function SearchBox (){
  return (
    <section className="p-2 text-center">
      <span className="text-grey-800 text-sm">
        Ainda não sabe o que assistir?
      </span>
      <p className="text-action-600">
        Busque por suas categorias preferidas
      </p>

      <div className="flex items-center justify-evenly text-brand-500 py-1">
        <button className="bg-transparent border border-solid border-brand-500  rounded-full outline-none focus:outline-none mr-1 mb-1">
          <span className="pr-1 pl-2">Seguro</span>
          <span className="pr-2">Auto</span>
        </button>
        <button className="bg-transparent border border-solid border-brand-500  rounded-full outline-none focus:outline-none mr-1 mb-1">
          <span className="pr-1 pl-2">Nossa</span>
          <span className="pr-2">Rede</span>
        </button>
        <button className="bg-transparent border border-solid border-brand-500  rounded-full outline-none focus:outline-none mr-1 mb-1">
          <span className="pr-1 pl-2">Auditoria</span>
          <span className="pr-2">Interna</span>
        </button>
      </div>

      <form>
        <SearchInput className="w-full" color={defaultConfig.theme.colors.grey[500]} placeholder="Ou procure por novas ideias..."/>
        <button type="submit" className="my-3 p-1 w-60 rounded text-base-white bg-gradient-to-r from-action-500 to-action-600">
          Buscar
        </button>
      </form>
    </section>
  )
}
