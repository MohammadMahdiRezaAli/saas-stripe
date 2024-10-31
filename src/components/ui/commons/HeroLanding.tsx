import React from "react";
// import BtnBuyService from "./BtnBuyService"; // This line remains commented to hide the component
import { useTranslations } from "next-intl";
import { FaChartLine, FaShieldAlt, FaRobot, FaUsers, FaMoneyBillWave, FaPercentage } from 'react-icons/fa';

const HeroLanding = () => {
  const t = useTranslations("Index");

  return (
    <div className="relative isolate pt-6" style={{ backgroundColor: '#1B1340' }}>
      {/* Animated Background */}
      <div
        className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-3xl animate-gradient"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]
                     bg-gradient-to-tr from-[#5C3DFF] to-[#8A66FF] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="py-16 sm:py-20 flex justify-center items-center min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Title with Text Gradient */}
            <h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent
                         bg-gradient-to-r from-[#F0EFFF] to-[#FFFFFF] leading-tight shadow-md"
              style={{ letterSpacing: "0.05em" }}
            >
              {t("title") || "Multiply Your Revenue. Minimize Your Effort."}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#E0E0F1]">
              BackPR powers serious growth for those who already play at the top. We don&apos;t
              promise quick fixes—we build digital ecosystems that drive 10X revenue with surgical
              precision.
            </p>

            <div className="mt-8 flex items-center justify-center gap-x-6">
              {/* Primary Button */}
              <button
                className="px-8 py-3 bg-gradient-to-br from-[#5C3DFF] to-[#8A66FF] text-white font-semibold rounded-full
                           shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get started for free
              </button>
              {/* Secondary Button with Border and Glow */}
              <button
                className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border border-[#8A66FF]
                           shadow-md transform transition duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg"
              >
                Login
              </button>
            </div>

            {/* Benefits Section with Glassmorphic Effect */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {[
                { icon: FaChartLine, label: "10X Traffic", color: "text-teal-400" },
                { icon: FaMoneyBillWave, label: "3X Sales", color: "text-indigo-400" },
                { icon: FaRobot, label: "Automate Marketing", color: "text-green-400" },
                { icon: FaUsers, label: "Join Our Family", color: "text-purple-400" },
                { icon: FaShieldAlt, label: "Increase Security", color: "text-red-400" },
                { icon: FaPercentage, label: "Reduce Costs", color: "text-yellow-400" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-[rgba(255,255,255,0.07)] backdrop-blur-md 
                             border border-[rgba(255,255,255,0.2)] shadow-lg shadow-[rgba(92,61,255,0.15)]
                             transition-transform transform hover:scale-105 hover:shadow-[rgba(92,61,255,0.3)]"
                >
                  <benefit.icon className={`${benefit.color} text-2xl`} />
                  <span className="text-[#E0E0F1] font-semibold">{benefit.label}</span>
                </div>
              ))}
            </div>

            {/* Partner Logos Section with Filter to Turn Black to White */}
            <div className="mt-24 flex justify-center gap-8"> {/* Increased margin-top for more spacing */}
              {["partners (1)", "partners (2)", "partners (3)", "partners (4)", "partners (5)"].map((brand, index) => (
                <img
                  key={index}
                  src={`/assets/img/${brand}.svg`} // Path to each logo image
                  alt={`${brand} logo`}
                  className="h-4 opacity-80 hover:opacity-100 transition-opacity filter invert brightness-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
