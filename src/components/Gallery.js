import React, { useState } from "react";
import { products as data } from "../utils/data";

import DragAndDrop from "./DragAndDrop";

const Gallery = () => {
  const [products, setProducts] = useState([...data]);
  const [checked, setChecked] = useState([]);

  const handleCheck = (event) => {
    const updatedCheckedList = [...checked];
    if (event.target.checked) {
      updatedCheckedList.push(event.target.value);
    } else {
      const index = updatedCheckedList.indexOf(event.target.value);
      updatedCheckedList.splice(index, 1);
    }

    setChecked(updatedCheckedList);
  };

  const handleDelete = () => {
    const updatedProducts = products.filter((product) => {
      return !checked.includes(product.id.toString());
    });

    setProducts(updatedProducts);
    setChecked([]);
  };

  const totaChecked = checked.length;

  return (
    <div className="bg-white rounded-md w-full">
      <div className="w-full flex py-3 px-5 h-16 items-center justify-between">
        <div>
          {totaChecked > 0 ? (
            <p className="text-gray-600 font-semibold">
              {totaChecked} {totaChecked > 1 ? "Files" : "File"} Selected
            </p>
          ) : (
            <p className="text-gray-600 font-semibold"> Gallery</p>
          )}
        </div>
        <div>
          {totaChecked > 0 && (
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

      <section className="max-w-5xl w-screen p-4">
        <DragAndDrop
          products={products}
          checked={checked}
          handleCheck={handleCheck}
        />
      </section>
    </div>
  );
};

export default Gallery;
