import Image from "next/image";

export default function CTAOffer() {
  return (
    <div className="bg-white py-14">
      <div className="px-6 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Great title offer
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, temporibus excepturi aperiam labore quaerat rem assumenda? Aperiam adipisci, accusamus autem fugiat atque possimus architecto vero impedit, omnis, nihil nemo error!
          </p>
        </div>

        {/* Awards Grid Section */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-4">
          {/* Image 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/1.png"
              alt="Award 1"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/2.png"
              alt="Award 2"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Image 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/3.png"
              alt="Award 3"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Image 4 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/4.png"
              alt="Award 4"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Image 5 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/5.png"
              alt="Award 5"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Image 6 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/6.png"
              alt="Award 6"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Image 7 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/7.png"
              alt="Award 7"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Image 8 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <Image
              src="/assets/images/8.png"
              alt="Award 8"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
