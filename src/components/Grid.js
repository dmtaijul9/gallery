import React from "react";

export function Grid({ children, columns }) {
  return <div className="grid grid-cols-5 gap-5 w-full">{children}</div>;
}
