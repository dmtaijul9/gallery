import React, { useState } from "react";
/* Imported images src from simple data folder as a js object */
import { products as data } from "../utils/data";

/* Importing Drag and Drop components */
import DragAndDrop from "./DragAndDrop";

const Gallery = () => {
  /* State for all images. it is storing here as root and served all over the application from here */
  const [images, setImages] = useState([...data]);
  /* State for checked images */
  const [checked, setChecked] = useState([]);

  /* Handle check for checkbox */
  const handleCheck = (event) => {
    /* making a clone of existend checked */
    const updatedCheckedList = [...checked];

    /* if checkbox is checked then add the id to checked array */
    if (event.target.checked) {
      updatedCheckedList.push(event.target.value);
    } else {
      /* if checkbox is unchecked then remove the id from checked array */
      const index = updatedCheckedList.indexOf(event.target.value);

      updatedCheckedList.splice(index, 1);
    }

    /* update the checked array */
    setChecked(updatedCheckedList);
  };

  /* Handle delete for delete button */
  const handleDelete = () => {
    /* filter out the images that are not checked */
    const updatedProducts = images.filter((image) => {
      return !checked.includes(image.id.toString());
    });

    /* update the images array */
    setImages(updatedProducts);

    /* uncheck all the checked images */
    setChecked([]);
  };

  /* Total checked images counted*/
  const totaChecked = checked.length;

  return (
    <div className="bg-white rounded-md w-full h-full">
      <div className="w-full flex py-3 px-5 h-16 items-center justify-between">
        <div>
          {totaChecked > 0 ? (
            /* if totalChecked is bigger then 0 then displaying counted files according to singular and plural form */
            <p className="text-gray-600 font-semibold">
              {totaChecked} {totaChecked > 1 ? "Files" : "File"} Selected
            </p>
          ) : (
            /* if totalChecked is 0 then displaying Gallery */
            <p className="text-gray-600 font-semibold"> Gallery</p>
          )}
        </div>
        <div>
          {totaChecked > 0 && (
            /* if totalChecked is bigger then 0 then displaying Delete button */
            <button
              onClick={handleDelete}
              className="text-red-500 font-semibold"
            >
              Delete {totaChecked > 1 ? "Files" : "File"}
            </button>
          )}
        </div>
      </div>
      <hr />

      {/* Drag and Drop component passing props with images, checked images and handle check event*/}
      <section className="max-w-5xl w-screen p-4">
        <DragAndDrop
          images={images}
          checked={checked}
          handleCheck={handleCheck}
        />
      </section>
    </div>
  );
};

export default Gallery;
