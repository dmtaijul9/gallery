import React, { forwardRef } from "react";
import Image from "./Image";

export const Photo = forwardRef(
  (
    {
      product,
      handleCheck,
      isDragging,
      checked,
      overlay,
      index,
      faded,
      style,
      ...props
    },
    ref
  ) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "#fff",
      ...style,
    };

    return (
      <div
        ref={ref}
        style={inlineStyles}
        {...props}
        className="rounded-lg overflow-hidden"
      >
        <Image
          product={product}
          handleCheck={handleCheck}
          checked={checked}
          overlay={overlay}
          isDragging={isDragging}
        />
      </div>
    );
  }
);
