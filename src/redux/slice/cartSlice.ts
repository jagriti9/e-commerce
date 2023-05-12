import { createSlice } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase";

export interface CartType {
  image: React.ImgHTMLAttributes<HTMLImageElement>;
  price: number;
  description: string;
  parent_id: number;
  category_id: number;
  name: string;
  product_id: any;
  quantity: number;
  totalPrice: number;
}

export interface QuantityPriceType {
  totalCount: number;
  totalPrice: number;
}
export interface CartState {
  cart: CartType[];
  totalQuantityAndPrice: QuantityPriceType;
}
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
  } as CartState,
  reducers: {
    totalQuantityInCart: (state) => {
      const QuantityAndPrice = {
        totalCount: 0,
        totalPrice: 0,
      };
      state.cart.map((items: any) => {
        QuantityAndPrice.totalCount += items.quantity;
        QuantityAndPrice.totalPrice += items.price * items.quantity;
      });

      state.totalQuantityAndPrice = QuantityAndPrice;
    },
    getCartFromFirestore: (state, action) => {
      state.cart = action.payload;
    },
    addItemToCart: (state, action) => {
      const itemInCart = state.cart.findIndex(
        (item: any) => item.product_id === action.payload.product_id
      );
      if (itemInCart === -1) {
        state.cart.push({ ...action.payload });
        const indexOfItem = state.cart.findIndex(
          (item: any) => item.product_id === action.payload.product_id
        );
        state.cart[indexOfItem].quantity++;
      }
    },
    increaseCartValue: (state, action) => {
      const indexOfItem = state.cart.findIndex(
        (item: any) => item.product_id === action.payload
      );
      state.cart[indexOfItem].quantity++;
      state.cart[indexOfItem].totalPrice = state.cart[indexOfItem].price * state.cart[indexOfItem].quantity;
    },
    decreaseCartValue: (state, action) => {
      const indexOfItem = state.cart.findIndex(
        (item: any) => item.product_id === action.payload
      );
      if (state.cart[indexOfItem].quantity > 0) {
        state.cart[indexOfItem].quantity--;
        state.cart[indexOfItem].totalPrice =
          state.cart[indexOfItem].totalPrice - state.cart[indexOfItem].price;
      }
      if (state.cart[indexOfItem].quantity <= 0) {
      }
    },
    removeItemFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item: any) => item.product_id !== action.payload
      );
      state.cart = removeItem;
    },
    addCartToFirestore: (state, action) => {
      updateDoc(doc(database, "users", action.payload), {
        cart: state.cart,
      });
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantityAndPrice = { totalCount: 0, totalPrice: 0 };
    },
  },
});

export const { actions: cartActions } = cartSlice;
export { cartSlice };
