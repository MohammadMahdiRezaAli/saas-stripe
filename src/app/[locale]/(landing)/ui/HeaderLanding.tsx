"use client";
import { constants } from "@/lib/constants";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Product", href: "/product", hasDropdown: true },
  { name: "Templates", href: "/templates" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Pricing", href: "/pricing" },
  { name: "Community", href: "/community" },
];

export const HeaderLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Homepage">
            <Image
              className="h-5 w-auto"
              width={120}
              height={30}
              src={constants.logoUrl || "/fallback-logo.png"} // Fallback image
              alt="Bettermode"
              priority // Optimized loading for performance
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-6 lg:ml-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-800 hover:text-gray-600 flex items-center"
              aria-haspopup={item.hasDropdown ? "true" : "false"} // Dropdown indicator
            >
              {item.name}
              {item.hasDropdown && <span className="ml-1 text-gray-500">▼</span>}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-5">
          <Link
            href="/request-demo"
            className="text-sm font-semibold text-gray-800 hover:text-gray-600"
          >
            Request Demo
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold text-gray-800 hover:text-gray-600"
          >
            Login
          </Link>
          <Link
            href="/get-started"
            className="bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Get started for free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            aria-label="Open main menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black bg-opacity-25" aria-hidden="true" />

        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Homepage">
              <Image
                className="h-5 w-auto"
                width={120}
                height={30}
                src={constants.logoUrl || "/fallback-logo.png"}
                alt="Bettermode"
                priority
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              {/* Mobile Navigation Links */}
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Action Links in Mobile Menu */}
              <div className="py-6 space-y-2">
                <Link
                  href="/request-demo"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  Request Demo
                </Link>
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  href="/get-started"
                  className="-mx-3 block rounded-lg px-3 py-2.5 bg-green-500 text-base font-semibold leading-7 text-white text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Get started for free
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
