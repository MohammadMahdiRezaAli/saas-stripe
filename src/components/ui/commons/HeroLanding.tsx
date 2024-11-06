import React from "react";

const HeroLanding = () => {
  return (
    <div className="relative pt-6" style={{ backgroundColor: '#F7F5FF' }}>
      <div className="py-20 flex justify-center items-center min-h-screen">
        <div className="text-center">
          {/* Header Text */}
          <h1
            className="text-5xl font-semibold leading-tight text-[#2C2260]"
            style={{ letterSpacing: "0.02em" }}
          >
            A better internet starts with privacy and freedom
          </h1>
          <p className="mt-4 text-lg text-[#55536B]">
            Take control of your data with end-to-end encryption
          </p>

          {/* Icon Box */}
          <div
            className="mt-10 mx-auto flex justify-center rounded-full px-4 py-5 bg-white shadow-lg max-w-[1022px]"
            style={{ height: '79px' }}
          >
            {[
              { label: "Email", iconSrc: "/assets/icons/mailpto.svg" },
              { label: "VPN", iconSrc: "/assets/icons/mailpto.svg" },
              { label: "Cloud storage", iconSrc: "/assets/icons/mailpto.svg" },
              { label: "Password manager", iconSrc: "/assets/icons/mailpto.svg" },
              { label: "Calendar", iconSrc: "/assets/icons/mailpto.svg" },
              { label: "Wallet", iconSrc: "/assets/icons/mailpto.svg" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 mx-2 rounded-full transition-all duration-200"
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EFEBFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <img src={item.iconSrc} alt={item.label} className="h-6 w-6" />
                <span
                  className="text-[#2C2260] font-medium text-sm underline"
                  style={{ textDecorationColor: '#8A6EFF' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
