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
      className="ui-container-container"
      style={{ backgroundColor: backgroundColor ? backgroundColor : "white" }}
    >
      <div className="ui-container-content">{children}</div>
    </div>
  );
}
