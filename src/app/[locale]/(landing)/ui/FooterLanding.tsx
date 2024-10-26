import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const navigation = {
  solutions: [
    { name: "Online Registration", href: "#" },
    { name: "Online Payment", href: "#" },
    { name: "Web Design & SEO", href: "#" },
    { name: "Enterprise Solutions", href: "#" },
    { name: "Business Marketing", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "About us", href: "#" },
    { name: "Contact us", href: "#" },
    { name: "Knowledge Base", href: "#" },
    { name: "Integration Apps", href: "#" },
  ],
  industry: [
    { name: "Class", href: "#" },
    { name: "Camp", href: "#" },
    { name: "Childcare", href: "#" },
    { name: "Afterschool", href: "#" },
    { name: "Providers", href: "#" },
    { name: "Faith Organizations", href: "#" },
  ],
  company: [
    { name: "Privacy Policy", href: "#" },
    { name: "Service Agreements", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: <FaLinkedin /> },
    { name: "Facebook", href: "#", icon: <FaFacebook /> },
    { name: "Instagram", href: "#", icon: <FaInstagram /> },
    { name: "Twitter", href: "#", icon: <FaTwitter /> },
    { name: "YouTube", href: "#", icon: <FaYoutube /> },
  ],
};

export default function FooterLanding() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-lg">BackPR</h3>
              {/* Added margin-top to create space between BackPR and email */}
              <address className="not-italic space-y-2 mt-4">
                <p className="text-sm text-gray-400 flex items-center">
                  <FaEnvelope className="mr-2" /> contact@backpr.com
                </p>
                <p className="text-sm text-gray-400 flex items-center">
                  {/* Phone number is now clickable */}
                  <FaPhoneAlt className="mr-2" /> 
                  <a href="tel:+17732347855" className="hover:text-white">
                    (773) 234-7855
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  600 Matheson Blvd W Unit 5, Mississauga, <br />
                  ON L5R 4C1, Canada
                </p>
              </address>
              {/* Store Icons with links and spacing */}
              <div className="flex space-x-4 mt-4">
                <a href="#">
                  <Image
                    src="/assets/img/play-store.svg"
                    alt="Google Play"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/img/apple.svg"
                    alt="App Store"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white text-md">Social Media</h4>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:text-gray-400"
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Industry
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.industry.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col lg:flex-row justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} BackPR.com, Inc. All rights reserved.
            </p>
            <div className="text-xs flex space-x-3 items-center leading-5 text-gray-400">
              <span>USD / EUR / JPY / GBP / CHF / ₿ / Ł</span>
              <Image
                src="/assets/img/stripeCards.png"
                alt="Supported Cards"
                width={177}
                height={30}
                className="inline"
              />
              <Image
                src="/assets/img/btc.png"
                alt="Bitcoin Accepted"
                width={35}
                height={30}
                className="inline"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
