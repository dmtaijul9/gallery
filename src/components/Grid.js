import React from "react";

export function Grid({ children, columns }) {
  return <div className="grid grid-cols-4 gap-4 w-full">{children}</div>;
}
