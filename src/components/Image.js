import React, { forwardRef } from "react";
import ImageCard from "./ImageCard";

export const Image = forwardRef(
  (
    {
      image,
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
        <ImageCard
          image={image}
          handleCheck={handleCheck}
          checked={checked}
          overlay={overlay}
          isDragging={isDragging}
        />
      </div>
    );
  }
);
