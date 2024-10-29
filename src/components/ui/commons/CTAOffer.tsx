import Image from "next/image";

export default function CTAOffer() {
  return (
    <div className="bg-[#EFEAFF] py-16"> {/* Soft background color */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1B1340] sm:text-4xl">
              Award-Winning Software
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-md leading-7 text-[#432E9D]">
              Our software has been recognized globally for its excellence, performance, and innovation. Explore our prestigious awards that showcase our dedication to quality.
            </p>
          </div>

          {/* Awards Grid Section */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 justify-center items-center">
            {[
              { src: "capterra.webp", alt: "Capterra Shortlist 2023" },
              { src: "capterra2023.webp", alt: "Capterra Best Value 2023" },
              { src: "softwareAdvice.webp", alt: "Software Advice Front Runners 2023" },
              { src: "Ca-win.png", alt: "Canadian Choice Award Winner 2024" },
              { src: "medal-winter.svg", alt: "G2 Leader Winter 2023" },
              { src: "medal-s.svg", alt: "G2 Leader Spring 2024" },
              { src: "medal.svg", alt: "G2 Leader Summer 2024" },
              { src: "medal-ent.svg", alt: "G2 Best Results Summer 2024" }
            ].map((award, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.3)", // Light, subtle border
                  boxShadow: "inset 0 4px 6px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.1)", // Inner shadow for depth
                }}
              >
                <Image
                  src={`/assets/img/${award.src}`}
                  alt={award.alt}
                  width={70}
                  height={70}
                  className="mx-auto"
                  title={award.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
