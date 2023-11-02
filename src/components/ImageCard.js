import React, { useEffect } from "react";

const ImageCard = ({ image, handleCheck, checked, isDragging, overlay }) => {
  /* checking if image is checked or not  */
  const isChecked = checked.includes(image?.id.toString());

  /* useEffect for attaching event listener to checkbox */
  useEffect(() => {
    const handleCheckboxMouseDown = (event) => {
      // Prevent drag behavior when interacting with the checkbox

      event.stopPropagation();
    };

    // Attach the event listener when the component mounts
    const checkbox = document.getElementById(`checkbox-${image?.id}`);

    // calling event on mouse down and touch start
    checkbox.addEventListener("mousedown", handleCheckboxMouseDown);
    checkbox.addEventListener("touchstart", handleCheckboxMouseDown);

    // Clean up the event listener when the component unmounts
    return () => {
      checkbox.removeEventListener("mousedown", handleCheckboxMouseDown);
      checkbox.removeEventListener("touchstart", handleCheckboxMouseDown);
    };
  }, [image?.id]);

  return (
    <div className=" border rounded-lg overflow-hidden shadow relative group w-full h-full">
      <div
        className={`absolute h-full w-full bg-black/40 flex items-center transition-all duration-300 justify-center   ${
          /* if image is dragging or overlaying then it will not happen in hover effect */
          isDragging || overlay ? "" : "group-hover:opacity-100"
        }  ${
          /* if image is checked then it will not happen in hover effect */
          isDragging && isChecked
            ? "opacity-0"
            : isChecked
            ? "opacity-40"
            : "opacity-0"
        }`}
      ></div>

      <div
        className={`w-full h-full border-lg ${
          /* if image is dragging then image will be invisible only border will be show. it will display behind the overlay of grabbing */
          isDragging ? "invisible" : "visible"
        }`}
      >
        {/* Displaying images from this div */}
        <div>
          <img src={image?.img} alt={image?.name} className="w-full" />
        </div>

        {/* Displaying checkbox from this div */}
        <label htmlFor={`product_${image?.id}`}>
          <input
            type="checkbox"
            name="image"
            className={`absolute top-2 left-3  ${
              /* if image is not overlaying then checkbox will be visible as group hover effect*/
              !overlay ? "group-hover:block" : ""
            } cursor-pointer z-50 ${
              /* if image is checked and not overlaying  then checkbox will be visible otherwise hidden */
              isChecked && !overlay ? "block" : "hidden"
            }`}
            id={`checkbox-${image?.id}`}
            checked={isChecked}
            onChange={handleCheck}
            value={image?.id}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageCard;
