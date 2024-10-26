import Image from "next/image";

export default function CTAOffer() {
  return (
    <div className="bg-white py-16"> {/* Adjusted padding for more space */}
      <div className="px-8 pb-24 sm:px-12 lg:px-16"> {/* Increased horizontal padding */}
        <div className="mx-auto max-w-5xl text-center"> {/* Centered container with max width */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Award-Winning Software
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Our software has been recognized globally for its excellence, performance, and innovation. Explore our prestigious awards that showcase our dedication to quality.
          </p>
        </div>

        {/* Awards Grid Section */}
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4"> {/* Adjusted margins and gaps */}
          {/* Image 1 */}
          <div className="bg-gray-100 p-2 rounded-xl shadow-md"> {/* Changed rounded-lg to rounded-xl */}
            <Image
              src="/assets/images/1.png"
              alt="Award 1"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-gray-100 p-2 rounded-xl shadow-md">
            <Image
              src="/assets/images/2.png"
              alt="Award 2"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 3 */}
          <div className="bg-gray-100 p-2 rounded-xl shadow-md">
            <Image
              src="/assets/images/3.png"
              alt="Award 3"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 4 */}
          <div className="bg-gray-100 p-2 rounded-xl shadow-md">
            <Image
              src="/assets/images/4.png"
              alt="Award 4"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 5 */}
          <div className="bg-gray-100 p-2 rounded-xl shadow-md">
            <Image
              src="/assets/images/5.png"
              alt="Award 5"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 6 */}
          <div className="bg-gray-100 p-2 rounded-xl shadow-md">
            <Image
              src="/assets/images/6.png"
              alt="Award 6"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 7 */}
          <div className="bg-gray-100 p-2 rounded-xl shadow-md">
            <Image
              src="/assets/images/7.png"
              alt="Award 7"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          {/* Image 8 */}
          <div className="bg-gray-100 p-2 rounded-xl shadow-md">
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
