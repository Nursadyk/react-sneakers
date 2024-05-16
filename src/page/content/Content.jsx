import React from "react";
import Card from "../card/Card";
import "./Content.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, searchFc } from "../../slices/Menu";
const Content = () => {
  const { items, search, loading } = useSelector((s) => s.menu);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchData());
  }, []);
  function checkLoading() {
    const filterItems = items.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
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
        {loading && <h2>loading...</h2>}
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
