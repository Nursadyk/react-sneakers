import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsActon, clearInputs } from "../../slices/Admin";
const Admin = () => {
  const dispatch = useDispatch();
  const { addItems } = useSelector((s) => s.admin);
  const addToItems = async () => {
    if (
      !addItems.name ||
      !addItems.image ||
      !addItems.price ||
      !addItems.description
    ) {
      alert("write full");
      return;
    } else {
      await axios.post(
        "https://6639fa2f1ae792804bed8616.mockapi.io/items",
        addItems
      );
      alert("added");
      dispatch(clearInputs());
    }
  };
  return (
    <>
      <div className="p-4 md:p-5">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
              value={addItems.name}
              onChange={(e) => dispatch(addItemsActon(e))}
            />
            <label
              for="name"
              className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type image url"
              value={addItems.image}
              onChange={(e) => dispatch(addItemsActon(e))}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              for="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$2999"
              value={addItems.price}
              onChange={(e) => dispatch(addItemsActon(e))}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              for="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              onChange={(e) => dispatch(addItemsActon(e))}
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option selected="BOY"> for boys</option>
              <option value="MEN">for mens</option>
              <option value="WOMAN">for women</option>
              <option value="WINTER">winter sneakers</option>
              <option value="SPRING">spring sneakers</option>
            </select>
          </div>
          <div className="col-span-2">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Description
            </label>
            <textarea
              onChange={(e) => dispatch(addItemsActon(e))}
              id="description"
              rows="4"
              name="description"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write product description here"
              value={addItems.description}
            ></textarea>
          </div>
        </div>
        <button
          onClick={addToItems}
          type="submit"
          class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="me-1 -ms-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Add new product
        </button>
      </div>
    </>
  );
};

export default Admin;
