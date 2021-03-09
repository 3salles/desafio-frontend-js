export default function SecondCarousel1() {
  return (
    <div
      className="rounded relative h-66 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("./assets/book.png")' }}
    >
      <div className="relative pb-5 px-5 pt-8 flex flex-col h-full z-10">
        <p className="text-2xl whitespace-pre-wrap text-base-white">
          Dicas de{'\n'}
          <span className="text-orange-50">
            carreira
            </span>
        </p>

        <div className="flex flex-col sm:flex-row text-sm text-base-white mt-auto">
          <div>
            <span className="block">Nome</span>
            <span>Sobrenome</span>
          </div>
          <button
            className="text-base-white mt-8 sm:mt-0 ml-auto uppercase py-3.5 px-4 bg-gradient-to-r from-action-500 to-action-600 text-xs rounded tracking-widest"
          >
            SAIBA MAIS
            </button>
        </div>

      </div>
      <div
        className="rounded opacity-70 w-full h-full top-0 left-0 absolute bg-gradient-to-r from-opaque-900 to-transparent"
      />
    </div>
  )
}
