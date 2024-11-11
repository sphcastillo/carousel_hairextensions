"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CarouselHairExtensionsLOGO from "@/images/logo/carouselhairextensionlogo.png";
import Image from "next/image";
import { User, ShoppingCart } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins_semibold = Poppins({ weight: "600", subsets: ["latin"] });
const poppins_medium = Poppins({ weight: "500", subsets: ["latin"] });

const navigation = [
  { name: "Home", href: "#" },
  { name: "Catalog", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#f8ddee] mx-auto max-w-7xl top-0 sticky z-50">
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
          {/* <div className="space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${poppins_semibold.className} text-sm tracking-wider font-semibold leading-6 text-[gray-800]`}
              >
                {item.name}
              </a>
            ))}
          </div> */}
        </div>

        {/* Log in button on the far right */}
        <div className="flex flex-1 justify-end space-x-6 pr-4">
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
        <div className="fixed inset-0" />
        <DialogPanel className="z-30 fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
