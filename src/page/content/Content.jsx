import React from "react";
import Card from "../card/Card";
import "./Content.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, searchFc } from "../../slices/Menu";
const Content = () => {
  const { filteredItems, search, loading } = useSelector((s) => s.menu);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchData());
  }, []);
  function checkLoading() {
    const filterItems = filteredItems.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
    // if (filterItems.length <= 0) {
    //   return false;
    // }
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
        {/* {!checkLoading() && (
          <h2>
            <b>Note found...!</b>
          </h2>
        )} */}
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
    </div>
  );
};

export default Content;
