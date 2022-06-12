import React, { ReactNode } from "react";
import "./container.css";

type ContainerProps = {
  children: ReactNode;
  backgroundColor: string;
};

export default function Container({
  children,
  backgroundColor,
}: ContainerProps): JSX.Element {
  return (
    <div
      className="UI-CONTAINER-container"
      style={{ backgroundColor: backgroundColor ? backgroundColor : "white" }}
    >
      <div className="UI-CONTAINER-content">{children}</div>
    </div>
  );
}
