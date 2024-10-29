"use client";
// import LocaleSwitcher from "@/components/core/LocaleSwitcher";
import { constants } from "@/lib/constants";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Navigation array with dropdowns for "Solutions", "Markets", and "Resources"
const navigation = [
  { name: "Solutions", href: "/solutions", dropdown: ["Solution 1", "Solution 2", "Solution 3"] },
  { name: "Markets", href: "/markets", dropdown: ["Market 1", "Market 2"] },
  { name: "Resources", href: "/resources", dropdown: ["Blog", "Guides", "Help Center"] },
  { name: "Contact Us", href: "/contact" },
  { name: "Pricing", href: "/pricing" },
];

export const HeaderLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-6">
        {/* Logo Section */}
        <div className="flex">
          <Link href="/" className="">
            <Image
              className="h-12 w-auto"
              width={160}
              height={120}
              src={constants.logoUrl}
              alt="The SaaS Boilerplate"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="text-lg font-medium text-black hover:text-gray-700"
              >
                {item.name}
                {item.dropdown && (
                  <span className="ml-1">&#x25BC;</span> // Small down arrow
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={`${item.href}/${subItem.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Profile Icon or Login/Register Link */}
        <div className="flex items-center space-x-6">
          <SignedIn>
            <Link href="/home">
              {user?.imageUrl ? (
                <Image
                  src={user.imageUrl}
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <UserCircleIcon className="h-10 w-10 text-gray-800" />
              )}
            </Link>
          </SignedIn>
          <SignedOut>
            <Link href="/home" className="text-lg font-medium text-black hover:text-gray-700">
              Login / Register
            </Link>
          </SignedOut>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
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
        <div className="fixed inset-0 z-50 bg-opacity-75 bg-black" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-4 py-6">
                {navigation.map((item, index) => (
                  <div key={index} className="block text-base font-medium text-gray-900">
                    <Link href={item.href} className="hover:text-gray-700">
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`${item.href}/${subItem.toLowerCase().replace(" ", "-")}`}
                            className="block text-sm text-gray-700 hover:text-gray-900"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <hr className="bg-gray-200" />
              <div className="py-6">
                <Link
                  href="/home"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Login / Register
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
