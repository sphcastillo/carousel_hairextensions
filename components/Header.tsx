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
const raleway_semibold = Raleway({ weight: "600", subsets: ["latin"] });
const raleway_bold = Raleway({ weight: "700", subsets: ["latin"] });

const dancing_script_semibold = Dancing_Script({ weight: "600", subsets: ["latin"] });

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
      className="bg-[#ffC0CB] py-1 mx-auto max-w-7xl top-0 sticky z-50"
      style={{
        backgroundImage: `url(${bannerBackground.src})`,
      }}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-evenly py-2 lg:px-8"
      >
        {/* Bars3Icon button on the far left */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden md:flex md:gap-x-5 md:justify-start">
          <a href="#" className="-m-1.5 p-1.5 pl-6">
            <span className="sr-only">Carousel Hair Extensions</span>
            <Image
              alt="Carousel Hair Extensions"
              src={CarouselHairExtensionsLOGO}
              className=""
              width={200}
              height={170}
            />
          </a>
        </div>

        {/* Logo centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="md:hidden">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Carousel Hair Extensions</span>
              <Image
                alt="Carousel Hair Extensions"
                src={CarouselHairExtensionsLOGO}
                className=""
                width={200}
                height={170}
              />
            </a>
          </div>
          <div className="hidden space-x-6 md:block">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${raleway_bold.className} tracking-tight text-md font-semibold leading-6 `}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Log in button on the far right */}
        <div className="flex flex-1 justify-end space-x-4 sm:space-x-6 pr-2 sm:pr-4">
          {/* <a
            href="#"
            className={`${poppins_medium.className} px-3 text-xs xs:text-sm tracking-widest font-semibold leading-6 text-gray-900`}
          >
            Log in
          </a> */}

          <Link href="/cart">
            <ShoppingCart size={24} />
          </Link>

          <Link href="/login">
            <User size={24} />
          </Link>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 " />
        <DialogPanel
          style={{
            backgroundImage: `url(${pinkhuebackground.src})`,
          }}
          className=" z-30 fixed inset-y-0 right-0 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Carousel Hair Extensions</span>
              <Image
                alt=""
                src={CarouselHairExtensionsLOGO}
                className="h-8 w-auto"
                width={200}
                height={170}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-black">
              <div className="space-y-10 py-20 sm:py-16 ">
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
