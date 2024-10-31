"use client";

import Image from "next/image";

export default function CTAOffer() {
  return (
    <div
      className="relative py-16"
      style={{
        background: "linear-gradient(180deg, #1B1340 0%, #30264F 100%)",
      }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5C3DFF] via-transparent to-[#8A66FF] opacity-25 animate-gradientMove"></div>

      <div className="relative flex justify-center items-center">
        <div className="w-full max-w-4xl px-8">
          <div className="text-center">
            <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-md">
              Award-Winning Software
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#E0E0F1] sm:text-xl">
              Our software has been recognized globally for its excellence,
              performance, and innovation. Explore our prestigious awards that
              showcase our dedication to quality.
            </p>
          </div>

          {/* Awards Grid Section */}
          <div
            className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 justify-center items-center"
            role="grid"
            aria-label="Award grid"
          >
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
                className="p-4 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-out relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 24px rgba(92, 61, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Reflection and Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-10 rounded-2xl pointer-events-none"></div>

                <Image
                  src={`/assets/img/${award.src}`}
                  alt={award.alt}
                  width={70}
                  height={70}
                  className="mx-auto filter brightness-0 invert"
                  title={award.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation for Background */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 10s ease infinite;
        }
      `}</style>
    </div>
  );
}
