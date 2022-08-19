import { toSlug } from "@lemon-test-mono/utils";
import * as React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      style={{
        border: "green",
      }}
    >
      {toSlug("Title large text")}
      {props.children}
    </button>
  );
}

Button.displayName = "Button";
