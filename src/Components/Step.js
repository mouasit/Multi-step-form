import React from "react";

export default function Step({ children ,className}) {
  return (
    <li>
      <button className={className}>
        {children}
      </button>
    </li>
  );
}
