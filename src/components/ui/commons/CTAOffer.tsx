import Image from "next/image";

export default function CTAOffer() {
  return (
    <div className="bg-white py-16"> {/* Adjust overall padding */}
      <div className="container mx-auto px-8 pb-24"> {/* Center the container on the page */}
        <div className="mx-auto max-w-6xl text-center"> {/* Adjusted max-width for the content */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Award-Winning Software
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Our software has been recognized globally for its excellence, performance, and innovation. Explore our prestigious awards that showcase our dedication to quality.
          </p>
        </div>

        {/* Awards Grid Section */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4 justify-center items-center"> {/* Adjusted gap and alignment */}
          {/* Image 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg"> {/* More padding for better spacing */}
            <Image
              src="/assets/images/1.png"
              alt="Award 1"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/2.png"
              alt="Award 2"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/3.png"
              alt="Award 3"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 4 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/4.png"
              alt="Award 4"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 5 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/5.png"
              alt="Award 5"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 6 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/6.png"
              alt="Award 6"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 7 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/7.png"
              alt="Award 7"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 8 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/8.png"
              alt="Award 8"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
