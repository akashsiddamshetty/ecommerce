/* eslint-disable @next/next/no-img-element */
import Product from "@/types/productTypes";
import React from "react";
import { FaRegStar } from "react-icons/fa";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden shadow-lg rounded-lg">
      <img
        className="w-full h-auto"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-gray-700">{product.brand}</span>
          <span className="text-gray-700">${product.price}</span>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaRegStar
                key={index}
                className={`h-5 w-5 text-yellow-500 ${
                  product.rating > index ? "fill-current" : "stroke-current"
                }`}
              />
            ))}
            <span className="ml-1 text-gray-700">
              {product.rating.toFixed(2)}
            </span>
          </div>
          <span className="text-gray-600 ml-auto">
            {product.availabilityStatus}
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          <span className="text-gray-600">{product.stock} in stock</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
