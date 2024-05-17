import React from "react";
import Card from "../card/Card";
import "./Content.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, searchFc } from "../../slices/Menu";
const Content = () => {
  const { filteredItems, search, loading } = useSelector((s) => s.menu);
  const [showAll, setShowAll] = React.useState(false);
  const renderItems = showAll ? filteredItems : filteredItems.slice(0, 8);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchData());
  }, []);
  function checkLoading() {
    const filterItems = renderItems.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filterItems.length <= 0) {
      return false;
    }
    return (loading ? [...Array(10)] : filterItems).map((el, idx) => (
      <Card {...el} idx={idx + 1} key={idx} loading={loading} />
    ));
  }
  return (
    <div className="content">
      <div className="content__top">
        <h1>
          Все <span className="short">кросовки</span>{" "}
        </h1>
        {!checkLoading() && (
          <h2>
            <b>Note found...!</b>
          </h2>
        )}
        <div className="search">
          <button>
            <span className="material-symbols-outlined">search</span>
          </button>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => dispatch(searchFc(e.target.value))}
          />
        </div>
      </div>
      <div className="content__inner">{checkLoading()}</div>
      {!showAll ? (
        <button
          onClick={() => setShowAll((prev) => true)}
          class=" mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            show more
          </span>
        </button>
      ) : (
        <button
          onClick={() => setShowAll((prev) => false)}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Show Less
          </span>
        </button>
      )}
    </div>
  );
};

export default Content;
