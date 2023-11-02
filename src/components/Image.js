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
    /* making some style for specific image compontent as grid child */
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

    /* returning the ImageCard component and passing some usefull props throw this component */
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
