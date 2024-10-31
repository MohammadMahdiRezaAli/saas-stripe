import React from "react";
import BtnBuyService from "./BtnBuyService";
import { useTranslations } from "next-intl";

const HeroLanding = () => {
  const t = useTranslations("Index");

  return (
    <div className="relative isolate pt-14" style={{ backgroundColor: '#1B1340' }}>
      {/* Animated Background */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-gradient"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]
                     bg-gradient-to-tr from-[#2D1A60] to-[#462FA4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="py-24 sm:py-40 flex justify-center items-center min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Title with Enhanced Gradient & Style */}
            <h1
              className="text-6xl font-extrabold tracking-wider sm:text-7xl bg-clip-text text-transparent
                         bg-gradient-to-r from-[#C4C4C4] via-[#F0F0F0] to-[#82E9D5] shadow-lg"
              style={{ letterSpacing: "0.05em" }}
            >
              {t("title") || "Multiply Your Revenue. Minimize Your Effort."}
            </h1>
            <p className="mt-6 py-3 text-xl leading-9 text-[#E0E0F1]">
              BackPR powers serious growth for those who already play at the top. We don&apos;t
              promise quick fixes—we build digital ecosystems that drive 10X revenue with surgical
              precision.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* Primary Button */}
              <button
                className="px-8 py-3 bg-gradient-to-br from-[#4C34B5] to-[#7F5AC0] text-white font-semibold rounded-full
                           shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Get started for free
              </button>
              {/* Secondary Button with Border and Glow */}
              <button
                className="px-8 py-3 bg-[#2D1A60] text-white font-semibold rounded-full border border-[#7F5AC0]
                           shadow-md transform transition duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg"
              >
                Login
              </button>
              {/* Custom button component */}
              <BtnBuyService />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
