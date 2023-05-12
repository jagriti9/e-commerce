import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./types";

export const selectUserDomain = (state: RootState) => state.user
export const selectProductDomain = (state: RootState) => state.products;
export const selectCartDomain = (state: RootState) => state.cart;
export const selectWishlistDomain = (state: RootState) => state.wishlist;
export const selectCheckoutDomain = (state: RootState) => state.checkout;

export const selectUserName = createSelector([selectUserDomain], state => state.userName)
export const selectSearch = createSelector([selectProductDomain], state => state.search);
export const selectCategory = createSelector([selectProductDomain], state => state.category);
export const selectFilter = createSelector([selectProductDomain], state => state.filter);
export const getAllProducts = createSelector([selectProductDomain], state => state.allProducts)
export const getCartData = createSelector([selectCartDomain], state => state.cart);
export const getCartQuantity = createSelector([selectCartDomain], state => state.totalQuantityAndPrice);
export const getWishlistData = createSelector([selectWishlistDomain], state => state.wishlist);
export const getOrderItems = createSelector([selectCheckoutDomain], state => state.previousOrders);