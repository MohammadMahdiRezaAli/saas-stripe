import Image from "next/image";

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
  vertical: [
    { name: "STEM", href: "#" },
    { name: "Sports", href: "#" },
    { name: "Chess", href: "#" },
    { name: "Performing arts", href: "#" },
    { name: "Language Centers", href: "#" },
  ],
  company: [
    { name: "Privacy Policy", href: "#" },
    { name: "Service Agreements", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  industry: [
    { name: "Class", href: "#" },
    { name: "Camp", href: "#" },
    { name: "Childcare", href: "#" },
    { name: "Afterschool", href: "#" },
    { name: "Providers", href: "#" },
    { name: "Faith Organizations", href: "#" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: "LinkedIn Icon" },
    { name: "Facebook", href: "#", icon: "Facebook Icon" },
    { name: "Instagram", href: "#", icon: "Instagram Icon" },
    { name: "Twitter", href: "#", icon: "Twitter Icon" }, // Represented by X in screenshot
    { name: "YouTube", href: "#", icon: "YouTube Icon" },
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
              <h3 className="text-white text-lg">Jumbula</h3>
              <address className="not-italic space-y-2">
                <p className="text-sm text-gray-400">
                  <span>Email: </span>contact@jumbula.com
                </p>
                <p className="text-sm text-gray-400">
                  <span>Phone: </span>(650) 502-0350
                </p>
                <p className="text-sm text-gray-400">
                  1900 S. Norfolk Street, Suite 350 <br />
                  San Mateo, CA 94403
                </p>
              </address>
              {/* Store Icons */}
              <div className="flex space-x-4">
                <Image
                  src="/path-to-play-store-icon.png"
                  alt="Google Play"
                  width={30}
                  height={30}
                />
                <Image
                  src="/path-to-app-store-icon.png"
                  alt="App Store"
                  width={30}
                  height={30}
                />
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
                    {/* Placeholder icons */}
                    <div className="h-6 w-6 bg-gray-500 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
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
                  Vertical
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.vertical.map((item) => (
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
          </div>
        </div>
      </div>
    </footer>
  );
}
