import React, { forwardRef } from "react";

export const Photo = forwardRef(
  ({ product, index, faded, style, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 410 : 200,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${product.img}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "grey",
      ...style,
    };

    return (
      <div ref={ref} style={inlineStyles} {...props}>
        <div className=" w-full bg-white bg-opacity-50 py-2 px-3">
          <div className="text-sm text-gray-500">{product.name}</div>
        </div>
      </div>
    );
  }
);
