import React from "react";
// import BtnBuyService from "./BtnBuyService"; // Remove if not used
import { useTranslations } from "next-intl"; // Only if you use 't'

const HeroLanding = () => {
  const t = useTranslations("Index"); // Only if 't' is used

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
          BackPR powers serious growth for those who already play at the top.
          We don&apos;t promise quick fixes—we build digital ecosystems that drive
          10X revenue with surgical precision.
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
    </>
  );
};

export default HeroLanding;
