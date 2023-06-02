import React from "react";

export function Steps({ children, className }) {
  return <main className={className}>{children}</main>;
}

export function Step({ children, className }) {
  return (
    <li>
      <button className={className}>{children}</button>
    </li>
  );
}

export function ListSteps({ children, className }) {
  return <ul className={className}>{children}</ul>;
}

export function StepsBody({ children }) {
  return <>{children}</>;
}

export function StepsItem({ children }) {
  return <>{children}</>;
}

export function StepsBar({ children, className }) {
  return <nav className={className}>{children}</nav>;
}

export function StepsContainer({ children, className }) {
  return <form className={className}>{children}</form>;
}

export function StepsControllers({
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
