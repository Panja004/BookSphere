import axios from "axios";
import React, { useEffect, useState } from "react";
import { backend_url, currency } from "../App";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";
import { FaEdit, FaCheck } from "react-icons/fa"; // Edit and Save Icons

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newPrice, setNewPrice] = useState("");

  const fetchlist = async () => {
    try {
      const response = await axios.get(backend_url + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backend_url + "/api/product/delete",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setList(list.filter((item) => item._id !== id)); // Instantly remove from UI
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleEdit = (id, price) => {
    setEditId(id);
    setNewPrice(price);
  };

  const updatePrice = async (id) => {
    try {
      const response = await axios.post(
        backend_url + "/api/product/update",
        { id, price: newPrice },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Price updated successfully!");

        // Update UI instantly without refreshing
        setList(
          list.map((item) =>
            item._id === id ? { ...item, price: newPrice } : item
          )
        );

        setEditId(null); // Exit edit mode
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <div className="px-2 sm:px-8 mt-4 sm:mt-14">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3.5fr_1.5fr_1fr_1fr_1fr] items-center py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded">
          <h5>Image</h5>
          <h5>Name</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>Edit</h5>
          <h5>Remove</h5>
        </div>

        {/* Product List */}
        {list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3.5fr_1.5fr_1fr_1fr_1fr] items-center gap-2 p-1 bg-white rounded-xl"
          >
            <img src={item.image} alt="" className="w-12 rounded-lg" />
            <h5 className="text-sm font-semibold">{item.name}</h5>
            <p className="font-semibold">{item.category}</p>

            {/* Price Edit Mode */}
            {editId === item._id ? (
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="border px-2 py-1 rounded w-16"
              />
            ) : (
              <div className="text-sm font-semibold">
                {currency}
                {item.price}
              </div>
            )}

            {/* Edit or Save Button */}
            <div>
              {editId === item._id ? (
                <FaCheck
                  onClick={() => updatePrice(item._id)}
                  className="cursor-pointer text-green-500 text-lg"
                />
              ) : (
                <FaEdit
                  onClick={() => handleEdit(item._id, item.price)}
                  className="cursor-pointer text-blue-500 text-lg"
                />
              )}
            </div>

            {/* Delete Button */}
            <div>
              <TbTrash
                onClick={() => removeProduct(item._id)}
                className="cursor-pointer text-lg text-red-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
