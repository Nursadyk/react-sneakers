import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { openCartFc } from "../../slices/Menu";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.cart);
  const [isOpenAdmin, setIsOpenAdmin] = React.useState(false);
  const openAdmin = () => {
    setIsOpenAdmin((prev) => !prev);
  };
  const totalPrice = () => {
    const totalPrice = cart.reduce((acc, item) => acc + Number(item.price), 0);
    return totalPrice;
  };
  return (
    <header className="header">
      <div className="header__left">
        <a href="#">
          <img
            src="https://www.pngall.com/wp-content/uploads/2/White-Sneakers-PNG-Clipart.png"
            alt=""
            style={{
              width: "150px",
            }}
          />
        </a>
        <div className="info">
          <h3>Кросовки</h3>
          <p>магазин лучших кросовок</p>
        </div>
      </div>
      <ul className="header__right">
        <li onClick={() => dispatch(openCartFc(true))}>
          <span className="material-symbols-outlined">shopping_cart</span>
          <abbr className=" text-xm mb-10 rounded-full border py-0 px-2">
            {cart.length}
          </abbr>
          <p
            className="none"
            style={{
              cursor: "pointer",
            }}
          >
            {totalPrice()}
            сом
          </p>
          <div className="dot"></div>
        </li>
        <Link to="/admin" onClick={openAdmin}>
          {isOpenAdmin ? (
            <Link to="/">
              <span class="material-symbols-outlined">arrow_back</span>
            </Link>
          ) : (
            <span className="material-symbols-outlined">account_circle</span>
          )}
        </Link>
      </ul>
    </header>
  );
};

export default Header;
