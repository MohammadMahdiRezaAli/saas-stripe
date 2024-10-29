"use client";

import Image from "next/image";

export default function CTAOffer() {
  return (
    <div
      className="relative py-16 px-4"
      style={{
        background: "linear-gradient(180deg, #F7F5FF 0%, #1B1340 100%)",
      }}
    >
      {/* Text Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1B1340] sm:text-5xl leading-tight">
          Award-Winning Software
        </h2>
        <p className="mt-4 text-lg text-[#6A4DC7] max-w-xl mx-auto leading-relaxed sm:text-lg">
          Our software has been recognized globally for its excellence, performance, and innovation. Explore our prestigious awards that showcase our dedication to quality.
        </p>
      </div>

      {/* Awards Grid Section */}
      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-5xl mx-auto">
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
            className="p-3 rounded-xl shadow-md transition-transform transform hover:scale-102 duration-200 ease-out"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1), inset 0 0 8px rgba(255, 255, 255, 0.05)",
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
  );
}
