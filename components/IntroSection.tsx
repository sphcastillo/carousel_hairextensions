import bejeweled from "@/images/bejeweledShimmer.jpg";
import Image from "next/image";
import lightPink from "@/public/images/lightPink.jpg";
import carouselworld from "@/images/carouselWorld.png";

export default function IntroSection() {
  return (
    <div
      className="relative isolate overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${lightPink.src})` }}
    >
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-12 lg:px-8 ">
        <div className="relative isolate overflow-hidden  px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          {/* <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#f99dbc" />
                  <stop offset={1} stopColor="#f99dbc" />
                </radialGradient>
              </defs>
            </svg> */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
              Boost your productivity.
              <br />
              Start using our app today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 bg-contain">
            <Image
              alt="App screenshot"
              src={carouselworld}
              width={600}
              height={300}
              className="object-cover w-full h-full"
              // className="absolute bg-contain left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
