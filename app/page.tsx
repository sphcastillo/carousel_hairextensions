import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import CarouselMagic from "@/images/homepage/carouselMagic.png";
import HomepageCollection from "@/components/HomepageCollection";
import fav1 from "@/images/homepage/favorites/BlondeCarouselFav.png";
import fav2 from "@/images/homepage/favorites/pinkbrownponytail.png";
import fav3 from "@/images/homepage/favorites/blackhairextensions.png";
import merchandise1 from '@/images/homepage/merchandise/xmasshirt.png';
import merchandise2 from "@/images/homepage/merchandise/originalcoffin.png";
import merchandise3 from '@/images/homepage/merchandise/halloweentshirt.png';
import brighterPinkCanvas from "@/images/brighterpinkbackground.png";
import alternateBrighterPinkCanvas from '@/images/squarishpinkbackground.png';

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

const merchandiseItems = [
  {
    id: 1,
    title: "Ashley Marie Xmas Tee",
    price: "30",
    src: merchandise1,
    link: "#",
  },
  {
    id: 2,
    title: "Carousel OG Coffin Box",
    price: "20",
    src: merchandise2,
    link: "#",
  },
  {
    id: 3,
    title: "Ghoul Friends Tee",
    price: "30",
    src: merchandise3,
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto bg-[#fcfcfc] custom-cursor">
      <Hero />
      <Banner />
      <HomepageCollection title="Our Favorites" data={favoriteItems} backgroundImage={brighterPinkCanvas}/>
      {/* <Image 
        src={CarouselMagic}
        alt="Carousel Magic"
        className="w-full"
      /> */}
      <Feature />

      <HomepageCollection title="Carousel Merchandise" data={merchandiseItems} backgroundImage={alternateBrighterPinkCanvas}/>
      <Testimonials />
    </main>
  );
}
