import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Footer from "../components/Footer";

const BookDetails = () => {
  const { id } = useParams();
  const { books, addToCart } = useContext(ShopContext);

  // Find the book from the context
  const book = books.find((b) => b._id === id);

  if (!book) return <div className="text-center py-10">Book not found</div>;

  return (
    <section className="max-padd-container">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-80 object-contain rounded-md"
        />
        <h2 className="text-2xl font-bold mt-4">{book.name}</h2>
        <p className="text-gray-600">{book.category}</p>
        <p className="text-xl font-semibold mt-2">${book.price}.00</p>
        <p className="mt-4">{book.description}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(book._id)}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
      <Footer />
    </section>
  );
};

export default BookDetails;
