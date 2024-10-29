import Image from "next/image";

export default function CTAOffer() {
  return (
    <div
      className="py-20 px-6 sm:px-12"
      style={{
        background: "linear-gradient(180deg, #F7F5FF 0%, #111827 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-[#1B1340] sm:text-6xl md:text-7xl tracking-tight">
          Award-Winning Software
        </h2>
        <p className="mt-6 text-lg text-[#432E9D] sm:text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
          Our software has been recognized globally for its excellence,
          performance, and innovation. Explore our prestigious awards that
          showcase our dedication to quality.
        </p>
      </div>

      {/* Awards Grid Section */}
      <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 justify-center items-center">
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
            className="p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-out bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30"
            style={{
              boxShadow:
                "0 8px 24px rgba(17, 24, 39, 0.2), 0 4px 12px rgba(255, 255, 255, 0.2)",
            }}
          >
            <Image
              src={`/assets/img/${award.src}`}
              alt={award.alt}
              width={80}
              height={80}
              className="mx-auto"
              title={award.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
