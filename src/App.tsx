import { Routes, Route } from "react-router";
import SignUp from "./components/userCredential/SignUp";
import SignIn from "./components/userCredential/SignIn";
import Cart from "./components/cart";
import Wishlist from "./components/wishlist";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Checkout from "./components/checkout";
import Orders from "./components/checkout/OrderPlaced";
import ProductDetails from "./components/products/singleProduct/ProductDetails";
import { ThemeProvider } from "styled-components";
import BasicLayout from "./components/layout";
import Account from "./components/account";
import AccountDetails from "./components/account/accountdetails/AccountDetails";
import MyOrders from "./components/account/orders/MyOrders";
import Products from "./components/products";
const theme = {
  bg: "rgb(235, 241, 244)",
  textColor: "#000",
  cardBg: "rgb(205, 227, 235)",
  primary: "rgb(82,113,235)",
};
function App() {
  const network = navigator.onLine;
  return (
    <>
      {network ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <Routes>
                <Route path="/" element={<BasicLayout />}>
                  <Route index element={<Products />} />
                  <Route path="cart" element={<Cart />} />
                <Route
                  path="product-details/:id"
                  element={<ProductDetails />}
                />
                <Route path="checkout" element={<Checkout />} />
                <Route path="order-placed" element={<Orders />} />
                <Route path="account" element={<Account />} />
                <Route path="my-orders" element={<MyOrders />} />
                <Route path="account-details" element={<AccountDetails />} />
                </Route>
                <Route path="wishlist" element={<Wishlist />} />


                <Route path="sign-up" element={<SignUp />} />
                <Route path="sign-in" element={<SignIn />} />
              </Routes>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      ) : (
        "no network"
      )}
    </>
  );
}

export default App;

