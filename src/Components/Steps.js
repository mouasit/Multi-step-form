import React, { useContext, createContext, useState, useEffect } from "react";

const StepsContext = createContext();

export function Steps({ children, className }) {
  const [order, setOrder] = useState(0);
  const [numberSteps, setNumberSteps] = useState(0);
  const [confirm, setConfirm] = useState(null);
  return (
    <StepsContext.Provider
      value={{
        order: order,
        setOrder: setOrder,
        numberSteps: numberSteps,
        setNumberSteps: setNumberSteps,
        confirm: confirm,
        setConfirm: setConfirm,
      }}
    >
      <main className={className}>{children}</main>
    </StepsContext.Provider>
  );
}

export function Step({ children, className, index }) {
  const dataContext = useContext(StepsContext);

  let order = dataContext.order;
  if (dataContext.order === dataContext.numberSteps - 1) order--;
  return (
    <li className="lg:w-full">
      <button
        className={`${className} ${order === index ? "active" : ""}`}
        onClick={() => {
          dataContext.setOrder(index);
        }}
      >
        {children}
      </button>
    </li>
  );
}

export function ListSteps({ children, className }) {
  return <ul className={className}>{children}</ul>;
}

export function StepsBody({ children }) {
  const dataContext = useContext(StepsContext);
  useEffect(() => {
    dataContext.setNumberSteps(children.length);
  }, [children.length, dataContext]);
  return <>{children[dataContext.order]}</>;
}

export function StepsItem({ children }) {
  const dataContext = useContext(StepsContext);
  useEffect(() => {
    dataContext.setConfirm(() => children.props.confirm);
  }, [children.props.confirm, dataContext]);
  return <>{children}</>;
}

export function StepsBar({ children, className }) {
  return <nav className={className}>{children}</nav>;
}

export function StepsContainer({ children, className }) {
  return <form className={className}>{children}</form>;
}

export function StepsControllers({ className, children }) {
  const dataContext = useContext(StepsContext);

  if (dataContext.order !== dataContext.numberSteps - 1)
    return <div className={className}>{children}</div>;
  else return null;
}

export function StepsButtons({
  className,
  nextContent,
  nextClassName,
  previousContent,
  previousClassName,
  nameConfirmation,
}) {
  const dataContext = useContext(StepsContext);
  return (
    <div
      className={`${className} ${
        dataContext.order > 0 ? "justify-between" : "justify-end"
      }`}
    >
      {dataContext.order > 0 ? (
        <button
          type="button"
          className={previousClassName}
          onClick={() => {
            dataContext.setOrder(dataContext.order - 1);
          }}
        >
          {previousContent}
        </button>
      ) : null}
      <button
        className={`${nextClassName} ${
          dataContext.order === dataContext.numberSteps - 2
            ? "bg-PurplishBlue"
            : "bg-MarineBlue"
        }`}
        type="submit"
        onClick={(e) => {
          e.preventDefault();

          console.log(dataContext.confirm);
          // dataContext.setOrder(dataContext.order + 1);
        }}
      >
        {dataContext.order !== dataContext.numberSteps - 2
          ? nextContent
          : nameConfirmation}
      </button>
    </div>
  );
}
