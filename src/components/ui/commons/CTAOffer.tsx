import Image from "next/image";

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
                src="/assets/images/1.png"
                alt="Award 1"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 2 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/images/2.png"
                alt="Award 2"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 3 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/images/3.png"
                alt="Award 3"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 4 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/images/4.png"
                alt="Award 4"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 5 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/images/5.png"
                alt="Award 5"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 6 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/images/6.png"
                alt="Award 6"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 7 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/images/7.png"
                alt="Award 7"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            {/* Image 8 */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
              <Image
                src="/assets/images/8.png"
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
