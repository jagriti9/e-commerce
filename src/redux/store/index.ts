import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userSlice } from "../slice/userSlice";
import { cartSlice } from "../slice/cartSlice";
import { wishlistSlice } from "../slice/wishlistSlice";
import { productSlice } from "../slice/productSlice";
import { checkoutSlice } from "../slice/checkoutSlice";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from "redux-logger";

const persistConfig = {
  key: 'root',
  storage,
}
const rooreducer = combineReducers({
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  wishlist: wishlistSlice.reducer,
  products: productSlice.reducer,
  checkout: checkoutSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rooreducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger({
    timestamp: true, collapsed: true, duration: true,
  }))
})
export const persistor = persistStore(store);