import Image from "next/image";

export default function CTAOffer() {
  return (
    <div className="bg-white py-16"> {/* Increased padding for better top/bottom space */}
      <div className="px-8 pb-24 sm:px-8 lg:px-12"> {/* Adjusted padding */}
        <div className="mx-auto max-w-4xl text-center"> {/* Increased max width for better centering */}
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"> {/* Font size slightly larger */}
            Award-Winning Software
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600"> {/* More space below the title */}
            Our software is recognized globally for its excellence in performance, usability, and innovation. Explore our awards that reflect our commitment to providing top-notch solutions.
          </p>
        </div>

        {/* Awards Grid Section */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4"> {/* Adjusted grid gap for more space */}
          {/* Image 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg"> {/* Increased padding */}
            <Image
              src="/assets/images/1.png"
              alt="Award 1"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/assets/images/2.png"
              alt="Award 2"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>

          {/* Image 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/assets/images/3.png"
              alt="Award 3"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>

          {/* Image 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/assets/images/4.png"
              alt="Award 4"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>

          {/* Image 5 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/assets/images/5.png"
              alt="Award 5"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>

          {/* Image 6 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/assets/images/6.png"
              alt="Award 6"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>

          {/* Image 7 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/assets/images/7.png"
              alt="Award 7"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>

          {/* Image 8 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <Image
              src="/assets/images/8.png"
              alt="Award 8"
              width={180}
              height={180}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
