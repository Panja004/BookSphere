import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TbShoppingBagPlus } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

const Item = ({ book }) => {
  const { currency, addToCart } = useContext(ShopContext);

  return (
    <div className="border border-gray-200 p-2 rounded-lg shadow-md pb-4 mt-[-10px]">
      {/* Adjusted margin-top to move the whole section upwards */}
      <div className="flexCenter bg-primary p-6 rounded-3xl overflow-hidden relative group">
        <img
          src={book.image}
          alt="bookImg"
          className="shadow-xl shadow-slate-900/30 rounded-lg"
        />
      </div>
      <div className="p-3">
        <div className="flexBetween">
          <h4 className="h4 line-clamp-1 !my-0">{book.name}</h4>
          <span
            onClick={() => addToCart(book._id)}
            className="flexCenter h-8 w-8 rounded cursor-pointer hover:bg-primary"
          >
            <TbShoppingBagPlus className="text-lg" />
          </span>
        </div>
        <div className="flexBetween pt-1">
          <p className="font-bold capitalize">{book.category}</p>
        </div>
        <div className="flexBetween pt-1">
          <h5 className="h5 text-secondaryOne pr-2">
            {currency}
            {book.price}.00
          </h5>
        </div>
        <p className="line-clamp-2 py-1">{book.description}</p>

        {/* "See More" Button - Ensured proper spacing */}
        <Link
          to={`/book/${book._id}`}
          className="mt-3 block text-center w-full bg-secondary text-white py-2 rounded-md hover:bg-secondaryDark transition"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Item;
