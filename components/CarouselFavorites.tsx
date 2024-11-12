import Image from "next/image";
import carouselFavoritesBackground from "@/images/homepage/CarouselFavoritesSectionBackground.png";
import fav1 from "@/images/homepage/favorites/fav1.png";
import fav2 from "@/images/homepage/favorites/fav2.png";
import fav3 from "@/images/homepage/favorites/fav3.png";
import { Lobster, Lora, Poppins } from "next/font/google";

const poppins_semibold = Poppins({ weight: "600", subsets: ["latin"] });

const favoriteItems = [
  {
    id: 1,
    title: "Black Diamond",
    price: "195",
    src: fav1,
    link: "#",
  },
  {
    id: 2,
    title: "The Sandy",
    price: "200",
    src: fav2,
    link: "#",
  },
  {
    id: 3,
    title: "Jem and the Holograms",
    price: "165",
    src: fav3,
    link: "#",
  },
];

function CarouselFavorites() {
  return (
    <div
      className="py-12 sm:py-16 bg-[#fffdfd] "
    //   style={{
    //     backgroundImage: `url(${carouselFavoritesBackground.src})`,
    //   }}
    >
      <div className="mx-auto max-w-2xl sm:text-center">
        <p
          className={`${poppins_semibold.className} mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
        >
          Welcome to Carousel Hair Extensions: A Whimsical World of Style &
          Beauty
        </p>
      </div>

      <div className="sm:px-24 mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {favoriteItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-4 "
          >
            <div className="w-full max-w-[200px] h-[300px] relative">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="rounded-2xl object-cover"
              />
            </div>

            <div className="p-2 text-center">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-xl font-medium text-black mb-4">${item.price}</p>
              <button className="text-sm tracking-wide text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded-full">
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselFavorites;
