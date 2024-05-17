import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { isAddedFc, addToCartAction } from "../../slices/Cart";
import axios from "axios";
import ContentLoader from "react-content-loader";
const Card = ({ image, description, price, count, id, idx, loading }) => {
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
    <>
      {loading ? (
        <ContentLoader
          speed={2}
          width={476}
          height={324}
          viewBox="0 0 476 324"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="9" rx="0" ry="0" width="197" height="121" />
          <rect x="-3" y="140" rx="0" ry="0" width="201" height="5" />
          <rect x="6" y="168" rx="0" ry="0" width="90" height="26" />
          <circle cx="166" cy="179" r="23" />
          <rect x="0" y="149" rx="0" ry="0" width="197" height="5" />
        </ContentLoader>
      ) : (
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
                background: isItemInCart(idx) ? "green" : "",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  color: isItemInCart(idx) ? "#fff" : "",
                }}
              >
                add
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
