import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc } from "firebase/firestore";
import { wishlistActions } from "../../redux/slice/wishlistSlice";
import { cartActions } from "../../redux/slice/cartSlice";
import { checkoutAction } from "../../redux/slice/checkoutSlice";
import { useDispatch } from "react-redux";
import { database } from "../../firebase";
import { Dispatch, AnyAction } from "@reduxjs/toolkit";

export const notify = (message: string) => {
  toast(message, { position: "top-center", autoClose: 2000 });
};

export const updateUserData = async (
  user: string,
  dispatch: Dispatch<AnyAction>
) => {
  const docref = await getDoc(doc(database, "users", user));
  if (docref.data()?.wishlist) {
    dispatch(wishlistActions.getWishlistFromFirestore(docref.data()?.wishlist));
  } else {
    dispatch(wishlistActions.getWishlistFromFirestore([]));
  }
  if (docref.data()?.cart) {
    dispatch(cartActions.getCartFromFirestore(docref.data()?.cart));
    dispatch(cartActions.totalQuantityInCart());
  } else {
    dispatch(cartActions.getCartFromFirestore([]));
  }
  if (docref.data()?.OrderDetails) {
    dispatch(checkoutAction.getPreviousOrders(docref.data()?.orderDetails));
  } else {
    dispatch(checkoutAction.getPreviousOrders([]));
  }
};
