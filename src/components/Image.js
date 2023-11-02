import React, { useEffect } from "react";

const Image = ({ product, handleCheck, checked, isDragging, overlay }) => {
  const isChecked = checked.includes(product?.id.toString());

  useEffect(() => {
    const handleCheckboxMouseDown = (event) => {
      // Prevent drag behavior when interacting with the checkbox

      event.stopPropagation();
    };

    // Attach the event listener when the component mounts
    const checkbox = document.getElementById(`checkbox-${product?.id}`);
    checkbox.addEventListener("mousedown", handleCheckboxMouseDown);

    // Clean up the event listener when the component unmounts
    return () => {
      checkbox.removeEventListener("mousedown", handleCheckboxMouseDown);
    };
  }, [product?.id]);

  return (
    <div className=" border rounded-lg overflow-hidden shadow relative group w-full h-full">
      <div
        className={`absolute h-full w-full bg-black/40 flex items-center justify-center   ${
          isDragging ? "" : overlay ? "" : "group-hover:opacity-100"
        }  ${
          isDragging && isChecked
            ? "opacity-0"
            : isChecked
            ? "opacity-40"
            : "opacity-0"
        }`}
      ></div>

      <div
        className={`w-full h-full border-lg ${
          isDragging ? "invisible" : "visible"
        }`}
      >
        <label htmlFor={`product_${product?.id}`}>
          <div>
            <img src={product?.img} alt={product?.name} className="w-full" />
          </div>
        </label>
        <input
          type="checkbox"
          name="image"
          className={`absolute top-2 left-2  ${
            !overlay ? "group-hover:block" : ""
          } cursor-pointer z-50 ${isChecked && !overlay ? "block" : "hidden"}`}
          id={`checkbox-${product?.id}`}
          checked={isChecked}
          onChange={handleCheck}
          value={product?.id}
        />
      </div>
    </div>
  );
};

export default Image;
