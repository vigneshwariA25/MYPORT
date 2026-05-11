import React from "react";
import './Contact.css';
function WhatsAppButton() {
  const phoneNumber = "917826973022"; // include country code
  const message = "Hello! I want to know more about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button className="whatsapp-button"
      onClick={handleClick}>
       💬 WhatsApp
    </button>
      
  );
}

export default WhatsAppButton;