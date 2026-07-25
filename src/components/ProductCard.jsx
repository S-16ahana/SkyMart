import React from "react";
import { ShoppingCart, Check, Star } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const isAdded = cartItems.some((item) => item.id === product.id);
  return (
    <div className="bg-[#121212] border border-[#2A2A2A] rounded-[28px] overflow-hidden hover:border-[#C8F400] transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative bg-white h-[235px] flex items-center justify-center px-6">
        <span className="absolute top-4 left-4 bg-[#6B6B6B] text-white text-[12px] px-3 py-1 rounded-full capitalize font-medium">
          {product.category}
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-[170px] object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        {/* Category */}
        <p className="uppercase tracking-[2px] text-[11px] text-[#666] font-medium">
          {product.category}
        </p>

        {/* Title */}
        <h3
          className="mt-2 text-[15px] leading-[22px] text-white font-semibold line-clamp-2 min-h-[44px]"
          style={{ fontFamily: "Syne" }}
        >
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mt-3">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={13}
              fill={
                index < Math.round(product.rating) ? "#FACC15" : "transparent"
              }
              className="text-yellow-400"
            />
          ))}

          <span className="text-[#666] text-[12px] ml-1">
            ({product.stock})
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A2A] my-4"></div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <h2
            className="text-[18px] text-[#C8F400]"
            style={{ fontFamily: "Clash Display" }}
          >
            ${product.price}
          </h2>

          {isAdded ? (
            <button className="h-9 px-4 rounded-xl bg-green-900/30 border border-green-700 text-green-400 flex items-center gap-2 text-sm font-medium">
              <Check size={15} />
              Added
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="h-9 px-5 rounded-xl bg-[#C8F400] text-black flex items-center gap-2 text-sm font-semibold"
            >
              <ShoppingCart size={15} />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
