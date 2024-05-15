import React, { useState } from "react";
import "./Overlay.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../Thunck";
import { openCartFc } from "../../slices/Menu";
import { deleteCart } from "../../slices/Cart";
import axios from "axios";
const Overlay = () => {
  const { cart } = useSelector((s) => s.cart);
  const { openCart } = useSelector((s) => s.menu);
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getOrder());
  }, []);
  const deleteCartItems = async (index, id) => {
    await axios.delete(
      `https://6639fa2f1ae792804bed8616.mockapi.io/cart/${id}`
    );
    dispatch(deleteCart(index));
  };
  const incrementCount = async (id) => {
    try {
      const postCount = await axios.patch(
        `https://6639fa2f1ae792804bed8616.mockapi.io/cart${id}`,
        {
          count: "+1",
        }
      );
      setCounter(postCount.data.count);
    } catch (error) {
      alert("axios error in overlay");
    }
  };
  return (
    <div
      className="overlay"
      style={{
        display: openCart ? "block" : "none",
      }}
    >
      <div className="overlay__inner">
        <button
          className="closeCart"
          onClick={() => dispatch(openCartFc(false))}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        {cart.length <= 0 ? (
          <h2 className="text-4xl text-center">Cart empty</h2>
        ) : null}
        {cart.map((el, index) => (
          <div className="cart" key={el.id}>
            <div className="img__wrapper">
              <img src={el.image} alt="" />
            </div>
            <div className="description">
              <p>{el.description}</p>
              <b>{el.price}</b>
            </div>
            <button
              onClick={() => incrementCount(el.count)}
              className=" border py-1 px-2 bg-green-500 text-white"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
            <p className=" mr-1 ml-1">{1}</p>
            <button className="border py-1 px-2 bg-red-500 text-white">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <button
              className="delete-order"
              onClick={() => deleteCartItems(index, el.id)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
