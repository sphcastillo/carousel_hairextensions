import lightPink from "@/public/images/lightPink.jpg";
export default function Hero () {
    return (
      // <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#f99dbc] to-[#fdd9e5]">
      // <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#bb8bc2] to-[#e486a1]">
      <div 
        className="relative isolate overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${lightPink.src})` }}
      >
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
              commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  