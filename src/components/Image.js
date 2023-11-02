import React from "react";

const Image = ({ product }) => {
  const { id, name, img } = product;
  return (
    <div
      className="first:col-span-2 first:row-span-2 border rounded-lg overflow-hidden shadow relative"
      draggable
      key={id}
    >
      <label htmlFor={`product_${id}`}>
        <div>
          <img src={img} alt={name} className="w-full" />
        </div>
      </label>
      <input
        type="checkbox"
        name="image"
        id={`product_${id}`}
        className="absolute top-2 left-2"
      />
    </div>
  );
};

export default Image;
