import React from "react";
import { Button } from "./Button";

const AboutUs = () => {
  return (
    <div className="imageContainer" style={{ marginTop: "5px" }}>
      <img
        style={{
          height: "45vh",
          width: "100vw",
          objectFit: "cover",
        }}
        src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero"
      />
      <div className="overlay">
        <div className="overlayContent">
          <h1>WE ARE A LANDING PAGE</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button
            onClick={() => {
              console.log("cliqué");
            }}
            type="button"
            buttonStyle="btn--gray--outline"
            buttonSize="btn--large"
          >
            Acheter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
