import React from "react";
import crossIcon from "../../../assets/maki_cross.png"; // Replace with your actual cross icon path
import burgerImage from "../../../assets/Rectangle 331.png"; // Replace with your actual burger image path

interface TbuttonProps {
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Tbutton: React.FC<TbuttonProps> = ({
  style,
  onMouseEnter,
  onMouseLeave,
  children,
}) => {
  return (
    <button
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

const OrderPrepare: React.FC = () => {
  return (
    <div
      style={{
        display: "flex", // Centering using Flexbox
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        //width: "300px", // Full viewport height
        background: "#f5f5f5", // Optional background color
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#fff",
          width: "300px",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Close Icon */}
        <img
          src={crossIcon}
          alt="Close"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "15px",
            height: "15px",
            cursor: "pointer",
          }}
        />

        {/* Burger Image */}
        <div style={{ marginTop: "20px" }}>
        <img
  src={burgerImage}
  alt="Burger"
  style={{
    display: "block", // Makes image a block element
    margin: "0 auto", // Centers the image horizontally
    width: "100px",
    height: "100px",
    borderRadius: "10px",
  }}
/>

        </div>

        {/* Burger Text */}
        <h2
          style={{
            fontSize: "12px",
            fontWeight: "500",
            color: "#000000",
            marginTop: "10px",
          }}
        >
          Burger{" "}
          <span
            style={{
              fontSize: "6px",
              fontWeight: "400",
              color: "#F1414F",
            }}
          >
            (Un Paid)
          </span>
        </h2>

        {/* Quantity */}
        <p
          style={{
            fontSize: "6px",
            fontWeight: "400",
            color: "#8E8E8E",
            marginTop: "5px",
          }}
        >
          (Quantity : 2)
        </p>

        {/* Order Status */}
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: "#F1414F",
            marginTop: "10px",
            lineHeight: "30px",
          }}
        >
          Your Order is being <br /> Prepared!
        </h1>

        {/* Cancel Button */}
        <Tbutton
          style={{
            marginTop: "15px",
            backgroundColor: "#F1414F",
            color: "#FFFFFF",
            border: "none",
            padding: "8px 16px",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#d12d3e")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#F1414F")
          }
        >
          Cancel Order
        </Tbutton>
      </div>
    </div>
  );
};

export default OrderPrepare;
