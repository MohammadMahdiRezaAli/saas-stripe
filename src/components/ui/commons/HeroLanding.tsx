import React from "react";
import BtnBuyService from "./BtnBuyService";
import { useTranslations } from "next-intl";

const HeroLanding = () => {
  const t = useTranslations("Index");

  return (
    <>
      {/* Header Section with Gradient Background */}
      <div
        style={{
          background: "linear-gradient(to right, #1B1340, #442EA1)",
          color: "#FFFFFF",
          padding: "4rem 2rem",
          textAlign: "center",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            margin: "0",
            lineHeight: "1.2",
          }}
        >
          Multiply Your Revenue. Minimize Your Effort.
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1rem", opacity: "0.8" }}>
          BackPR powers serious growth for those who already play at the top. We
          don't promise quick fixes—we build digital ecosystems that drive 10X
          revenue with surgical precision.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <button
            style={{
              padding: "0.8rem 1.6rem",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "30px",
              backgroundColor: "#442EA1",
              color: "#FFFFFF",
              border: "none",
              marginRight: "1rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Get Started for Free
          </button>
          <button
            style={{
              padding: "0.8rem 1.6rem",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "30px",
              backgroundColor: "#1B1340",
              color: "#FFFFFF",
              border: "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Login
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "4rem 2rem",
          backgroundColor: "#1B1340",
          color: "#FFFFFF",
          gap: "2rem",
        }}
      >
        {[
          { title: "Proton Mail", description: "Encrypt emails and secure communications." },
          { title: "Proton Calendar", description: "Plan with privacy in mind." },
          { title: "Proton Drive", description: "Store files with encrypted cloud storage." },
          { title: "Proton VPN", description: "Browse safely with encrypted connection." },
          { title: "Proton Pass", description: "Protect passwords with end-to-end encryption." },
          { title: "Proton Wallet", description: "Safeguard Bitcoin and manage securely." },
        ].map((feature, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(to bottom right, #442EA1, #1B1340)",
              padding: "2rem",
              borderRadius: "15px",
              width: "18rem",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: "1rem", marginTop: "0.5rem", opacity: "0.9" }}>
              {feature.description}
            </p>
            <button
              style={{
                marginTop: "1rem",
                padding: "0.6rem 1.2rem",
                fontSize: "0.9rem",
                fontWeight: "bold",
                borderRadius: "20px",
                backgroundColor: "#442EA1",
                color: "#FFFFFF",
                border: "none",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1B1340")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#442EA1")}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroLanding;
