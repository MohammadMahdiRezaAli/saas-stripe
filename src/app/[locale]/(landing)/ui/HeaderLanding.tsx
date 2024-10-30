"use client";
import { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "/product", hasDropdown: true },
  { name: "Templates", href: "/templates" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Pricing", href: "/pricing" },
  { name: "Community", href: "/community" },
];

const productDropdownItems = [
  { name: "Overview", description: "Welcome to Bettermode! Here are the basics", icon: "✔️", href: "#" },
  { name: "Features", description: "Discover templates, customization, analytics, and more", icon: "✨", href: "#" },
  { name: "Apps & integrations", description: "Connect your favorite tools with Bettermode", icon: "📦", href: "#" },
];

const extraProductLinks = [
  { title: "Getting started", description: "Take a tour around and learn how to create out of the box powerful web apps", linkText: "Bettermode Academy", href: "#" },
  { title: "What's new?", description: "Take a look at what we have been building to help businesses engage customers.", linkText: "Product updates", href: "#" },
];

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};

export const HeaderLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const productDropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useOutsideClick(productDropdownRef, () => setProductDropdownOpen(false));

  const openDropdown = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setProductDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => setProductDropdownOpen(false), 200);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4" aria-label="Global">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Homepage">
            <Image
              className="h-5 w-auto"
              width={120}
              height={30}
              src="assets/img/backpr.png"
              alt="BackPR Logo"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-6 lg:ml-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              onMouseEnter={item.hasDropdown ? openDropdown : null}
              onMouseLeave={item.hasDropdown ? closeDropdown : null}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-sm font-semibold text-gray-800 hover:text-gray-600 flex items-center"
                onFocus={item.hasDropdown ? openDropdown : null}
                onBlur={item.hasDropdown ? closeDropdown : null}
              >
                {item.name}
                {item.hasDropdown && <span className="ml-1 text-gray-500">▼</span>}
              </Link>

              {/* Product Dropdown */}
              {item.hasDropdown && productDropdownOpen && (
                <div
                  ref={productDropdownRef}
                  className="absolute left-0 mt-2 w-[700px] p-6 rounded-lg bg-white/80 backdrop-blur-md shadow-xl ring-1 ring-black ring-opacity-5 flex space-x-8 transition-all duration-200 ease-in-out transform scale-95"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {/* Left Section with Overview, Features, Apps */}
                  <div className="w-1/2 bg-white p-6 rounded-l-lg space-y-6">
                    {productDropdownItems.map((subItem) => (
                      <Link href={subItem.href} key={subItem.name} className="block">
                        <div className="flex items-start p-3 hover:bg-gray-100 rounded-md transition-all duration-200">
                          <span className="text-lg mr-3 text-gray-700">{subItem.icon}</span>
                          <div>
                            <p className="font-semibold text-gray-900 text-[14px]">{subItem.name}</p>
                            <p className="text-gray-600 text-[12px] leading-6">{subItem.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Right Section with Images and Links */}
                  <div className="w-1/2 bg-gray-100 p-6 rounded-r-lg space-y-6">
                    {extraProductLinks.map((link, index) => (
                      <div key={link.title} className="flex items-start space-x-4 mb-8">
                        <Image
                          src={`/assets/img/${index === 0 ? 'dm' : 'dml'}.jpg`}
                          alt={link.title}
                          width={120}
                          height={70}
                          className="rounded-md shadow-sm"
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold text-gray-900 text-[14px]">{link.title}</p>
                          <p className="text-gray-600 text-[12px] leading-6">{link.description}</p>
                          <Link href={link.href} className="text-green-500 text-[13px] font-semibold hover:underline flex items-center">
                            {link.linkText} <span className="ml-1">→</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-3">
          <Link href="/request-demo" className="text-sm font-semibold text-gray-800 hover:text-gray-600">
            Request Demo
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/login" className="text-sm font-semibold text-gray-800 hover:text-gray-600">
            Login
          </Link>
          <Link href="/get-started" className="bg-green-500 text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
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
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black bg-opacity-25" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" aria-label="Mobile navigation">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Homepage">
              <Image className="h-5 w-auto" width={120} height={30} src="assets/img/backpr.png" alt="BackPR Logo" priority />
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
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="py-6 space-y-2">
                <Link href="/request-demo" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                  Request Demo
                </Link>
                <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                  Login
                </Link>
                <Link href="/get-started" className="-mx-3 block rounded-lg px-3 py-2.5 bg-green-500 text-base font-semibold leading-7 text-white text-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
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
