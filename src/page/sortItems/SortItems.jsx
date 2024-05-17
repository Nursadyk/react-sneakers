import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { readyItems } from "../../slices/Menu";
const SortItems = () => {
  const { items } = useSelector((s) => s.menu);
  const dispatch = useDispatch();
  const SortItemsPrice = () => {
    const exam = [...items].sort(function (a, b) {
      return b.price - a.price;
    });
    dispatch(readyItems(exam));
  };
  const SortForMens = (category) => {
    const filteredMen = items.filter((el) => el.category === category);
    dispatch(readyItems(filteredMen));
  };
  const SortForWoman = (category) => {
    const filteredWoman = items.filter((el) => el.category === category);
    dispatch(readyItems(filteredWoman));
  };
  const SortForBoys = (category) => {
    const filteredWoman = items.filter((el) => el.category === category);
    dispatch(readyItems(filteredWoman));
  };
  return (
    <>
      <div className="sort-block">
        <button
          onClick={SortItemsPrice}
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          sort width price
        </button>
        <button
          onClick={() => SortForMens("MEN")}
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          for mens
        </button>
        <button
          onClick={() => SortForWoman("WOMAN")}
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          for women
        </button>
        <button
          onClick={() => SortForBoys("for boys")}
          type="button"
          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          for boys
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default SortItems;
