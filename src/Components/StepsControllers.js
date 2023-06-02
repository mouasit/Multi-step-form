import React from "react";

export default function StepsControllers({
  className,
  nextContent,
  nextClassName,
  previousContent,
  previousClassName,
}) {
  return (
    <div className={className}>
      <button className={nextClassName}>{nextContent}</button>
    </div>
  );
}
