import Image from "next/image";

export default function HostingPlans() {
  return (
    <div className="bg-white py-16">
      {/* Overall container for hosting plans */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <h3 className="text-sm text-gray-500 font-semibold">Prices</h3>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-2">The main hosting plans we offer</h2>
        <p className="text-gray-600 mt-4">
          Various options so you can choose the one that best suits your needs. Whether you are an entrepreneur, a small or medium-sized company, or a large company.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* cPanel Hosting Plan */}
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">cPanel Hosting</h3>
          <p className="mt-4 text-3xl font-bold text-gray-900">$1.99<span className="text-sm font-medium">/month</span></p>
          <button className="mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Buy plan</button>
          <div className="mt-8 text-left">
            <h4 className="font-semibold text-gray-800">ePanel Features</h4>
            <ul className="mt-2 space-y-2">
              <li>✅ Unlimited Domains</li>
              <li>✅ SSL for all domains</li>
              <li>✅ CPU Cores: 2</li>
              <li>✅ 30 Daily Backups</li>
              <li>✅ Unlimited emails & Webmails</li>
              <li>✅ Unlimited databases</li>
              <li>✅ Support for different versions of PHP, Node, Python, Ruby, etc.</li>
              <li>✅ SSD Storage: 1.2 GB</li>
            </ul>
            <h4 className="mt-6 font-semibold text-gray-800">Service Features</h4>
            <ul className="mt-2 space-y-2">
              <li>✅ Ticket Support</li>
            </ul>
          </div>
        </div>

        {/* cPanel Hosting + Domain Plan */}
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">cPanel Hosting + Domain</h3>
          <p className="mt-4 text-3xl font-bold text-gray-900">$43<span className="text-sm font-medium">/year</span></p>
          <button className="mt-6 px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">Buy plan</button>
          <div className="mt-8 text-left">
            <h4 className="font-semibold text-gray-800">ePanel Features</h4>
            <ul className="mt-2 space-y-2">
              <li>✅ Unlimited Domains</li>
              <li>✅ SSL for all domains</li>
              <li>✅ CPU Cores: 2</li>
              <li>✅ 30 Daily Backups</li>
              <li>✅ Unlimited emails & Webmails</li>
              <li>✅ Unlimited databases</li>
              <li>✅ Support for different versions of PHP, Node, Python, Ruby, etc.</li>
              <li>✅ SSD Storage: 5.56 GB</li>
            </ul>
            <h4 className="mt-6 font-semibold text-gray-800">Service Features</h4>
            <ul className="mt-2 space-y-2">
              <li>✅ Includes domain registration</li>
              <li>✅ Ticket Support</li>
              <li>✅ WhatsApp support</li>
            </ul>
          </div>
        </div>

        {/* WordPress Hosting + Divi + Domain Plan */}
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800">Wordpress Hosting + Divi + Domain</h3>
          <p className="mt-4 text-3xl font-bold text-gray-900">$49<span className="text-sm font-medium">/year</span></p>
          <button className="mt-6 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700">Buy plan</button>
          <div className="mt-8 text-left">
            <h4 className="font-semibold text-gray-800">ePanel Features</h4>
            <ul className="mt-2 space-y-2">
              <li>✅ Unlimited Domains</li>
              <li>✅ SSL for all domains</li>
              <li>✅ CPU Cores: 2</li>
              <li>✅ 30 Daily Backups</li>
              <li>✅ Unlimited emails & Webmails</li>
              <li>✅ Unlimited databases</li>
              <li>✅ Support for different versions of PHP, Node, Python, Ruby, etc.</li>
              <li>✅ SSD Storage: 5.56 GB</li>
            </ul>
            <h4 className="mt-6 font-semibold text-gray-800">Service Features</h4>
            <ul className="mt-2 space-y-2">
              <li>✅ Includes domain registration</li>
              <li>✅ Ticket Support</li>
              <li>✅ WhatsApp support</li>
            </ul>
            <h4 className="mt-6 font-semibold text-gray-800">Features of Wordpress</h4>
            <ul className="mt-2 space-y-2">
              <li>✅ Installing Wordpress</li>
              <li>✅ Installing Divi from Elegant Themes</li>
              <li>✅ Divi License Activation by Elegant Themes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function CTAOffer() {
  return (
    <div className="bg-white py-16"> {/* Overall padding for more compact view */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl px-8"> {/* Center container with max width */}
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Award-Winning Software
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              Our software has been recognized globally for its excellence, performance, and innovation. Explore our prestigious awards that showcase our dedication to quality.
            </p>
          </div>

          {/* Awards Grid Section */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 justify-center items-center"> {/* Smaller gap for tighter alignment */}
            {/* Image 1 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg"> {/* Adjusted padding */}
              <Image
                src="/assets/img/capterra.webp"
                alt="Award 1"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 2 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/img/capterra2023.webp"
                alt="Award 2"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 3 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/img/getapp.webp"
                alt="Award 3"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 4 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/img/sourceforge2.webp"
                alt="Award 4"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 5 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/img/top-performer-summer-white.webp"
                alt="Award 5"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 6 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/img/users-love-us-new-white2.webp"
                alt="Award 6"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 7 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/img/softwareAdvice.webp"
                alt="Award 7"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 8 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/img/Ca-win.png"
                alt="Award 8"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
