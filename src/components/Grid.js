import React from "react";

export function Grid({ children, columns }) {
  /* Displaying grid from as this ui from this component */
  return (
    /* grid is the wrapper for all images */
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 w-full">
      {children}
    </div>
  );
}
