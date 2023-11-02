import React, { useState } from "react";
import { products as data } from "../utils/data";
import Image from "./Image";
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

  return (
    <div className="bg-white rounded-md w-full">
      <div className="w-full flex py-3 px-5 items-center justify-between">
        <div>3 Files Selected</div>
        <div>
          <button>Delete files</button>
        </div>
      </div>
      <hr />
      {/* <div className="w-full py-5 px-5 grid grid-cols-5 gap-5 first:col-span-2 first:row-span-2">
        {products.map((product) => {
          return <Image product={product} key={product.id} />;
        })}
        <div className="border-dashed border rounded-lg overflow-hidden ">
          <div className="w-full h-full flex justify-center items-center flex-col space-y-2 hover:bg-gray-200">
            <img
              src="images/image-12.png"
              alt="image icon"
              className="max-w-[35px]"
            />
            <div className="text-sm text-gray-500">Add Files</div>
          </div>
        </div>
      </div> */}

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
