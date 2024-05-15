import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { isAddedFc, addToCartAction } from "../../slices/Cart";
import axios from "axios";
const Card = ({ image, description, price, count, id, idx }) => {
  const { cart } = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const addToCart = async (obj) => {
    try {
      const { data } = await axios.post(
        `https://6639fa2f1ae792804bed8616.mockapi.io/cart`,
        obj
      );
      dispatch(addToCartAction(data));
      dispatch(isAddedFc());
    } catch (e) {
      alert(e.message);
    }
    addToCartAction();
  };
  const isItemInCart = (id) => {
    return cart.some((el) => Number(el.idx) === Number(id));
  };
  return (
    <div className="card">
      <div className="favorite">
        <span
          style={{
            cursor: "pointer",
          }}
          className="material-symbols-outlined"
        >
          favorite
        </span>
      </div>
      <div className="img__wrapper">
        <img
          src={image}
          style={{
            width: "100%",
          }}
          alt=""
        />
      </div>
      <div className="text">
        <p>{description}</p>
      </div>
      <div className="under">
        <b>{price}com</b>

        <button
          className="add"
          onClick={() =>
            addToCart({ image, description, price, id, count, idx })
          }
          style={{
            background: isItemInCart(id) ? "green" : "",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              color: isItemInCart(id) ? "#fff" : "",
            }}
          >
            add
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
