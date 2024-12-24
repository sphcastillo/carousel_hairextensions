"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CarouselHairExtensionsLOGO from "@/images/logo/carouselhairextensionlogo.png";
import Image from "next/image";
import { User, ShoppingCart } from "lucide-react";
import { Raleway, Dancing_Script } from "next/font/google";
import Link from "next/link";
import bannerBackground from "@/images/homepage/banner/brightpinkBannerBackground.png";
import pinkhuebackground from "@/images/squarishpinkbackground.png";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const raleway_regular = Raleway({ weight: "400", subsets: ["latin"] });
const raleway_medium = Raleway({ weight: "500", subsets: ["latin"] });
const raleway_semibold = Raleway({ weight: "600", subsets: ["latin"] });
const raleway_bold = Raleway({ weight: "700", subsets: ["latin"] });

const dancing_script_semibold = Dancing_Script({ weight: "600", subsets: ["latin"] });
const dancing_script_bold = Dancing_Script({ weight: "700", subsets: ["latin"] });

const navigation = [
  { name: "Home", href: "#" },
  { name: "Catalog", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="z-40 mx-auto max-w-7xl top-0 sticky "

    >
      <nav
        aria-label="Global"
        className="mx-auto pt-3 pb-2  bg-[#ffC0CB] z-40 flex max-w-7xl items-center justify-evenly lg:px-8"
        style={{
          backgroundImage: `url(${bannerBackground.src})`,
        }}
      >

        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6 text-black" />
          </button>
        </div>

        <div className="hidden md:flex md:gap-x-5 md:justify-start">
          <a href="#" className="-m-1.5 p-1.5 pl-6">
            <span className="sr-only">Carousel Hair Extensions</span>
            {/* <Image
              alt="Carousel Hair Extensions"
              src={CarouselHairExtensionsLOGO}
              className=""
              width={200}
              height={170}
            /> */}
            <h2 className={`${dancing_script_bold.className} text-xl xs:text-2xl`}>Carousel Hair Extensions</h2>
          </a>
        </div>

        {/* Logo centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="md:hidden">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Carousel Hair Extensions</span>
              {/* <Image
                alt="Carousel Hair Extensions"
                src={CarouselHairExtensionsLOGO}
                className=""
                width={200}
                height={170}
              /> */}
              <h2 className={`${dancing_script_bold.className} text-xl xs:text-2xl`}>Carousel Hair Extensions</h2> 
            </a>
          </div>
          <div className="hidden space-x-6 md:block">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`${raleway_medium.className} text-md  leading-6 `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-end space-x-4 sm:space-x-6 pr-3 sm:pr-4">


          <Link href="/cart">
            <ShoppingCart size={24} />
          </Link>

        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden z-50"
      >
        <div className="fixed inset-0 " />
        <DialogPanel
          style={{
            backgroundImage: `url(${pinkhuebackground.src})`,
          }}
          className=" z-40 fixed inset-y-0 right-0 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Carousel Hair Extensions</span>
              {/* <Image
                alt=""
                src={CarouselHairExtensionsLOGO}
                className="h-8 w-auto"
                width={200}
                height={170}
              /> */}
              {/* <h2 className={`${dancing_script_bold.className} text-xl`}>Carousel Hair Extensions</h2> */}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6 text-black hover:bg-[#77c4ca]" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className=" divide-y divide-black">
              <div className="space-y-10 pt-10 pb-10">
                {navigation.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`${dancing_script_semibold.className} hover:rounded-2xl hover:bg-[#77c4ca] text-center -mx-3 block rounded-lg px-3 py-2 text-[22px] leading-7 text-gray-900`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <div className="pb-6 pt-12 flex justify-center items-center space-x-12">
                  <Link
                    className="cursor-pointer hover:text-[#77c4ca]"
                    href="https://www.instagram.com/_carouselhairextensions_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-7 w-7" />
                  </Link>
                  <Link
                    className="cursor-pointer hover:text-[#77c4ca]"
                    href="https://www.tiktok.com/@carouselhairextensions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="h-6 w-6 " />
                  </Link>

                  <Link
                    className="cursor-pointer hover:text-[#77c4ca]"
                    href="https://www.facebook.com/profile.php?id=100032460173579"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="h-6 w-6 " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
