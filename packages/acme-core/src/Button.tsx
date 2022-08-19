import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      style={{
        background: "green",
      }}
    >
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
