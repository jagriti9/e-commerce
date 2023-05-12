import { createSlice } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: [] as any,
    userDetails: [] as any,
    previousOrders: [] as any
  },
  reducers: {
    addToCheckout: (state, action) => {
      state.checkout = action.payload;
    },
    addDetailsToCheckout: (state, action) => {
      state.userDetails = [action.payload]
    },
    getPreviousOrders: (state, action) => {
      state.previousOrders = action.payload
    },
    addCheckoutToFirestore: (state, action) => {
      const order = { orderedItems: state.checkout, userDetails: state.userDetails }
      state.previousOrders.push(order)
      updateDoc(doc(database, "users", action.payload), {
        orderDetails: state.previousOrders,
      });
    },
    clearCheckout: (state) => {
      state.checkout = [];
      state.userDetails = [];
    },
  },
});

export const { actions: checkoutAction } = checkoutSlice;

export { checkoutSlice };
