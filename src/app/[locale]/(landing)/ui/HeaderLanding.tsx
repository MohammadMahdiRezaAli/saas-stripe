"use client";
import { useState, useEffect, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "/product", hasMegamenu: true },
  { name: "Templates", href: "/templates" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Pricing", href: "/pricing" },
  { name: "Community", href: "/community" },
];

const productMegamenuItems = [
  { name: "Proton Mail", description: "Encrypted email that's private by default.", icon: "📧", href: "#" },
  { name: "Proton Calendar", description: "Your calendar is a record of your life. Keep it safe.", icon: "📅", href: "#" },
  { name: "Proton Drive", description: "Secure cloud storage that gives you control of your data.", icon: "📂", href: "#" },
  { name: "Proton VPN", description: "Your gateway to online freedom.", icon: "🔒", href: "#" },
  { name: "Proton Pass", description: "An encrypted password manager that protects your online identity.", icon: "🔑", href: "#" },
  { name: "Proton Wallet", description: "Store and transact Bitcoin privately with an encrypted self-custody wallet.", icon: "💰", href: "#" },
];

const premiumProductLink = {
  name: "Proton For Business",
  description: "Improve the security of your business and comply with data protection laws.",
  icon: "🏢",
  href: "#",
};

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
  const [megamenuOpen, setMegamenuOpen] = useState(false);
  const megamenuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useOutsideClick(megamenuRef, () => setMegamenuOpen(false));

  const openMegamenu = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setMegamenuOpen(true);
  };

  const closeMegamenu = () => {
    dropdownTimeoutRef.current = setTimeout(() => setMegamenuOpen(false), 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5FF] shadow-lg w-full">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 relative" aria-label="Global">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Homepage">
            <Image
              className="h-4 w-auto"
              width={100}
              height={25}
              src="/assets/img/backpr-night.png"
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
              onMouseEnter={item.hasMegamenu ? openMegamenu : null}
              onMouseLeave={item.hasMegamenu ? closeMegamenu : null}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-sm font-semibold text-[#1B1340] hover:text-[#6D4AFF] flex items-center"
              >
                {item.name}
                {item.hasMegamenu && (
                  <span className="ml-1">
                    <Image
                      src="/assets/img/arrow-down.png"
                      alt="Dropdown arrow"
                      width={10}
                      height={10}
                      className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                    />
                  </span>
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Megamenu */}
        {megamenuOpen && (
          <div
            ref={megamenuRef}
            className="absolute left-0 right-0 top-full max-w-4xl mx-auto bg-white shadow-lg ring-1 ring-[#6D4AFF] transition-opacity duration-300 ease-out z-40 rounded-lg p-6"
            onMouseEnter={openMegamenu}
            onMouseLeave={closeMegamenu}
          >
            <div className="flex space-x-8">
              <div className="grid grid-cols-2 gap-4 w-2/3">
                {productMegamenuItems.map((subItem) => (
                  <Link href={subItem.href} key={subItem.name} className="block">
                    <div className="flex items-start p-4 rounded-lg transition-all duration-200 hover:bg-[#F7F5FF]">
                      <span className="text-xl mr-4 text-[#6D4AFF]">{subItem.icon}</span>
                      <div>
                        <p className="font-semibold text-[#1B1340] text-[16px]">{subItem.name}</p>
                        <p className="text-[#1B1340] text-[14px] leading-6">{subItem.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="w-1/3 pl-6 border-l border-[#6D4AFF]">
                <div className="mt-4">
                  <Link href={premiumProductLink.href} className="block p-4">
                    <div className="flex items-start">
                      <span className="text-xl mr-4 text-[#6D4AFF]">{premiumProductLink.icon}</span>
                      <div>
                        <p className="font-semibold text-[#1B1340] text-[16px]">{premiumProductLink.name}</p>
                        <p className="text-[#1B1340] text-[14px] leading-6">{premiumProductLink.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-3">
          <Link href="/request-demo" className="text-sm font-semibold text-[#1B1340] hover:text-[#6D4AFF]">
            Request Demo
          </Link>
          <span className="text-[#6D4AFF]">|</span>
          <Link href="/login" className="text-sm font-semibold text-[#1B1340] hover:text-[#6D4AFF]">
            Login
          </Link>
          <Link href="/get-started" className="bg-[#6D4AFF] text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-[#5A3CE0]">
            Get started for free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-gray-500"
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#F7F5FF] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#6D4AFF]">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Homepage">
              <Image className="h-4 w-auto" width={100} height={25} src="/assets/img/backpr.png" alt="BackPR Logo" priority />
            </Link>
            <button
              type="button"
              className="rounded-md p-2.5 text-[#1B1340] hover:text-[#6D4AFF]"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="block px-3 py-2 text-base font-semibold text-[#1B1340] hover:bg-[#E7E3FF]">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="py-6 space-y-2">
            <Link href="/request-demo" className="block px-3 py-2.5 text-base font-semibold text-[#1B1340] hover:bg-[#E7E3FF]">
              Request Demo
            </Link>
            <Link href="/login" className="block px-3 py-2.5 text-base font-semibold text-[#1B1340] hover:bg-[#E7E3FF]">
              Login
            </Link>
            <Link href="/get-started" className="block px-3 py-2.5 bg-[#6D4AFF] text-white text-center font-semibold hover:bg-[#5A3CE0]">
              Get started for free
            </Link>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
