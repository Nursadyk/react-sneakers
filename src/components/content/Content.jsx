import React from "react";
import Card from "../card/Card";
import "./Content.css";
import { useDispatch, useSelector } from "react-redux";
import { thunCk } from "../../Thunck";
import { fetchData, searchFc } from "../../slices/Menu";
const Content = () => {
  const { items, loading, search } = useSelector((s) => s.menu);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="content">
      <div className="content__top">
        <h1>
          Все <span className="short">кросовки</span>{" "}
        </h1>
        {loading && <h2>Loading</h2>}
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
      <div className="content__inner">
        {items
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          .map((el, idx) => (
            <Card {...el} idx={idx + 1} key={el.id} />
          ))}
      </div>
    </div>
  );
};

export default Content;
