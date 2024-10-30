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
  { name: "Overview", description: "Welcome to Bettermode! Here are the basics", icon: "✔️" },
  { name: "Features", description: "Discover templates, customization, analytics, and more", icon: "✨" },
  { name: "Apps & integrations", description: "Connect your favorite tools with Bettermode", icon: "📦" },
];

const extraProductLinks = [
  { title: "Getting started", description: "Take a tour around and learn how to create out of the box powerful web apps", linkText: "Bettermode Academy" },
  { title: "What's new?", description: "Take a look at what we have been building to help businesses engage customers.", linkText: "Product updates" },
];

// Custom hook to handle clicks outside of a referenced element
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

  useOutsideClick(productDropdownRef, () => setProductDropdownOpen(false));

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
              src="assets/img/backpr.png" // Correct logo path
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
              onMouseEnter={() => item.hasDropdown && setProductDropdownOpen(true)}
              onMouseLeave={() => item.hasDropdown && setProductDropdownOpen(false)}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-sm font-semibold text-gray-800 hover:text-gray-600 flex items-center"
                onFocus={() => item.hasDropdown && setProductDropdownOpen(true)}
                onBlur={() => item.hasDropdown && setProductDropdownOpen(false)}
              >
                {item.name}
                {item.hasDropdown && <span className="ml-1 text-gray-500">▼</span>}
              </Link>

              {/* Product Dropdown */}
              {item.hasDropdown && productDropdownOpen && (
                <div
                  ref={productDropdownRef}
                  className="absolute left-0 mt-2 w-full max-w-7xl p-6 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 flex"
                  onMouseEnter={() => setProductDropdownOpen(true)}
                  onMouseLeave={() => setProductDropdownOpen(false)}
                  style={{
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {/* Left Section */}
                  <div className="w-1/2 bg-white px-6 py-4 space-y-4 rounded-lg">
                    {productDropdownItems.map((subItem) => (
                      <div key={subItem.name} className="flex items-start p-2 hover:bg-gray-100 rounded-md">
                        <span className="text-lg mr-3">{subItem.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900">{subItem.name}</p>
                          <p className="text-sm text-gray-600">{subItem.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Section */}
                  <div className="w-1/2 px-6 py-4 space-y-6 rounded-lg bg-gray-100">
                    {extraProductLinks.map((link, index) => (
                      <div key={link.title} className="flex items-start space-x-4">
                        <Image
                          src={`/assets/img/${index === 0 ? 'IMG1' : 'IMG2'}.png`} // Placeholder images
                          alt={link.title}
                          width={100}
                          height={60}
                          className="rounded-md"
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold text-gray-900">{link.title}</p>
                          <p className="text-sm text-gray-600">{link.description}</p>
                          <Link href="#" className="text-green-500 text-sm font-semibold">
                            {link.linkText} →
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
          {/* Mobile menu code here */}
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
