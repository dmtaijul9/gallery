import React, { useEffect } from "react";

const Image = ({ product }) => {
  const { id, name, img } = product;
  useEffect(() => {
    const handleCheckboxMouseDown = (event) => {
      // Prevent drag behavior when interacting with the checkbox
      event.stopPropagation();
    };

    // Attach the event listener when the component mounts
    const checkbox = document.getElementById(`checkbox-${id}`);
    checkbox.addEventListener("mousedown", handleCheckboxMouseDown);

    // Clean up the event listener when the component unmounts
    return () => {
      checkbox.removeEventListener("mousedown", handleCheckboxMouseDown);
    };
  }, [id]);
  return (
    <div
      className=" border rounded-lg overflow-hidden shadow relative group"
      draggable
      key={id}
    >
      <div className="overlay"></div>
      <label htmlFor={`product_${id}`}>
        <div>
          <img src={img} alt={name} className="w-full" />
        </div>
      </label>
      <input
        type="checkbox"
        name="image"
        className="absolute top-2 left-2 cursor-pointer z-50"
        id={`checkbox-${id}`}
      />
    </div>
  );
};

export default Image;
