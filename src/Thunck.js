import axios from "axios";
import { awaitItems, readyItems, errorItems } from "./slices/Menu";
import { addToCartAction } from "./slices/Cart";
// export const thunCk = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(awaitItems());
//       const res = await axios(
//         `https://6639fa2f1ae792804bed8616.mockapi.io/items`
//       );
//       dispatch(readyItems(res.data));
//     } catch (error) {
//       dispatch(errorItems(error.message));
//     }
//   };
// };
export const getOrder = () => {
  return async (dispatch) => {
    try {
      const res = await axios(
        `https://6639fa2f1ae792804bed8616.mockapi.io/cart`
      );
      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];
        dispatch(addToCartAction(element));
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};
