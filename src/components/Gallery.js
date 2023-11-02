import React from "react";
import { products } from "../utils/data";
import Image from "./Image";

const Gallery = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="w-full flex py-3 px-5 items-center justify-between">
        <div>3 Files Selected</div>
        <div>
          <button>Delete files</button>
        </div>
      </div>
      <hr />
      <div className="w-full py-5 px-5 grid grid-cols-5 gap-5 first:col-span-2 first:row-span-2">
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
      </div>
    </div>
  );
};

export default Gallery;
