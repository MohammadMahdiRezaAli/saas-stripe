import React from "react";
import { FaEnvelope, FaShieldAlt, FaCloud, FaKey, FaCalendar, FaWallet } from 'react-icons/fa';

const HeroLanding = () => {
  return (
    <div className="relative isolate pt-6" style={{ backgroundColor: '#F7F5FF' }}>
      {/* Main Content */}
      <div className="py-16 sm:py-20 flex justify-center items-center min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-[#2D1B63] tracking-tight sm:text-5xl leading-tight">
              A better internet starts with <br /> privacy and freedom
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#6B6E85]">
              Take control of your data with end-to-end encryption
            </p>

            {/* Icons Section */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 px-4 py-6 bg-white rounded-full shadow-lg shadow-[#DDD9F0]">
              {[
                { icon: FaEnvelope, label: "Email" },
                { icon: FaShieldAlt, label: "VPN" },
                { icon: FaCloud, label: "Cloud storage" },
                { icon: FaKey, label: "Password manager" },
                { icon: FaCalendar, label: "Calendar" },
                { icon: FaWallet, label: "Wallet" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 rounded-lg">
                  <benefit.icon className="text-[#6D4AFF] text-2xl" />
                  <span className="text-[#2D1B63] font-semibold">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
