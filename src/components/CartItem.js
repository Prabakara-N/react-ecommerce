import React from "react";
import { Link } from "react-router-dom";

// icon
import { IoMdClose } from "react-icons/io";

const CartItem = ({ item }) => {
  // destructuring item

  const { id, title, image, price, amount } = item;

  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center grid-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />{" "}
        </Link>

        <div className="w-full flex  flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            {/* remove icon */}
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition duration-300" />
            </div>
          </div>
          <div>
            {/* qty */}
            <div>quantity</div>
            {/* item prize */}
            <div>item price</div>
            {/* final prize */}

            <div>final price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
