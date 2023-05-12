import { createSlice } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [] as any,
  },
  reducers: {
    addItemToWishlist: (state, action) => {
      const indexOfItem = state.wishlist.findIndex(
        (item: any) => item.product_id === action.payload.product_id
      );
      if (indexOfItem === -1) {
        state.wishlist.push({ ...action.payload });
      }
    },
    getWishlistFromFirestore: (state, action) => {
      state.wishlist = action.payload;
    },
    removefromWishlist: (state, action) => {
      const removeItem = state.wishlist.filter(
        (item: any) => item.product_id !== action.payload.product_id
      );
      state.wishlist = removeItem;
    },
    addWishlistToFirestore: (state, action) => {
      if (state.wishlist.length > 0) {
        updateDoc(doc(database, "users", action.payload), {
          wishlist: state.wishlist,
        });
      }
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const { actions: wishlistActions } = wishlistSlice;
export { wishlistSlice };
