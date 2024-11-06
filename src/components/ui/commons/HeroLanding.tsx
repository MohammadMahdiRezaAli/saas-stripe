import React from "react";
import { FaEnvelope, FaShieldAlt, FaCloud, FaKey, FaCalendar, FaWallet } from 'react-icons/fa';

const HeroLanding = () => {
  return (
    <div className="relative isolate" style={{ backgroundColor: '#F7F5FF' }}>
      {/* Spacing Between Header and Hero Section */}
      <div className="py-[150px] flex justify-center items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Hero Title */}
            <h1 className="text-4xl font-semibold text-[#2D1B63] leading-tight tracking-wide">
              A better internet starts with <br /> privacy and freedom
            </h1>
            <p className="mt-3 text-md text-[#4E4A67]">
              Take control of your data with end-to-end encryption
            </p>

            {/* Icons Section */}
            <div className="mt-6 flex justify-center gap-8 px-8 py-4 bg-white rounded-full shadow-lg mx-auto" style={{ maxWidth: '1010px' }}>
              {[
                { icon: FaEnvelope, label: "Email" },
                { icon: FaShieldAlt, label: "VPN" },
                { icon: FaCloud, label: "Cloud storage" },
                { icon: FaKey, label: "Password manager" },
                { icon: FaCalendar, label: "Calendar" },
                { icon: FaWallet, label: "Wallet" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <benefit.icon className="text-[#6D4AFF] text-xl" />
                  <span className="text-[#2D1B63] font-medium text-base">{benefit.label}</span>
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
