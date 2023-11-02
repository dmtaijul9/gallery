import React from "react";

export function Grid({ children, columns }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
      {children}
    </div>
  );
}
