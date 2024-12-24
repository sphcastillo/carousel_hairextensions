import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Raleway, Dancing_Script } from "next/font/google";
const dancing_script_bold = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});
const raleway_medium = Raleway({ weight: "500", subsets: ["latin"] });

interface Item {
  id: number;
  title: string;
  price: string;
  src: StaticImageData;
  link: string;
}

interface HomepageCollectionProps {
  title: string;
  data: Item[];
  backgroundImage: StaticImageData;
}

export default function HomepageCollection({
  title,
  data,
  backgroundImage,
}: HomepageCollectionProps) {
  return (
    <div
      className=" py-4 sm:py-16 bg-[#ffC0CB] "
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h1
          className={`${dancing_script_bold.className} pt-6 pb-12 mt-2 text-4xl font-bold  tracking-tight text-black sm:text-5xl`}
        >
          {title}
        </h1>
      </div>

      <Carousel className="max-w-4xl mx-auto">
        <CarouselContent>
          {data.map((item, index) => (
            <div key={index} className="p-4">
              <div className="w-full min-w-[270px] h-[330px] relative">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className={`${raleway_medium.className} p-2 text-center`}>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-xl font-medium text-black mb-4">
                  ${item.price}
                </p>
                <button className="text-sm tracking-wide text-white bg-black hover:bg-pink-600 py-2 px-4 rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* <div className="sm:px-24 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center p-4 ">
            <div className="w-full max-w-[200px] h-[300px] relative">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="rounded-2xl object-cover"
              />
            </div>

            <div className={`${raleway_medium.className} p-2 text-center`}>
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-xl font-medium text-black mb-4">
                ${item.price}
              </p>
              <button className="text-sm tracking-wide text-white bg-black hover:bg-pink-600 py-2 px-4 rounded-full">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
