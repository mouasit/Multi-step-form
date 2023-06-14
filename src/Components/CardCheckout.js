import React from "react";

export default function CardCheckout({ service, price }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm capitalize text-CoolGray">{service}</span>
      <span className="text-sm">{price}</span>
    </div>
  );
}
