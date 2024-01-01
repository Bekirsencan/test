import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "./Button";

const Cards = () => {
  const cardDetail = [
    {
      title: "Clock",
      buttonText: "Go",
      phone_number: "+905418153052",
      card_image:
        "https://plus.unsplash.com/premium_photo-1661774796613-e744c2dc0467?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Title 2",
      buttonText: "Next",
      phone_number: "+905418153052",
      card_image:
        "https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Title 3",
      buttonText: "Go",
      phone_number: "+905418153052",
      card_image:
        "https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905418153052",
      card_image:
        "https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905418153052",
      card_image:
        "https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Title 4",
      buttonText: "Next",
      phone_number: "+905418153052",
      card_image:
        "https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const handleWhatsAppRedirect = (phone_number) => {
    console.log("Test", phone_number);
    window.open(`https://wa.me/${phone_number}`, "_blank");
  };
  return (
    <div className="d-flex flex-wrap" style={{ marginTop: "15px" }}>
      {cardDetail.map((detail, index) => (
        <div
          className="imageContainer shadow p-3 mb-5 bg-white rounded"
          style={{
            marginTop: "5px",
            marginRight: "25px",
          }}
        >
          <img
            style={{
              height: "25vh",
              width: "25vw",
              objectFit: "cover",
            }}
            src={detail.card_image}
            alt="Hero"
          />
          <div className="overlay">
            <div className="overlayContent">
              <h1>{detail.title}</h1>
              <Button
                onClick={() => handleWhatsAppRedirect(detail.phone_number)}
                type="button"
                buttonStyle="btn--dark--outline"
                buttonSize="btn--large"
              >
                Acheter
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
