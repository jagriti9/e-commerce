import { fireEvent, render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import ProductDetails from "../singleProduct/ProductDetails";
import { Store, AnyAction } from "@reduxjs/toolkit";
import Productpage from "../singleProduct/ProdcutPage";

const mockStore = configureStore([]);

describe("ProductDetails", () => {
  let store: Store<unknown, AnyAction>;
  const initialState = {
    products: {
      allProducts: [
        {
          product_id: 1,
          parent_id: 1,
          category_id: 1,
          description: "Product Description",
          imageUrl: "https://example.com/image.jpg",
          name: "Product Name",
          price: 100,
        },
      ],
    },
    wishlist: [],
    cart: [],
    user:[{
      UserName:'dummy',
      email:'dummy@gmail.com',
    }]
  };
  const product = {
    name:'dummy',
    product_id:3,
  }
  const wishlistState = true,cartState = false
  
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it("renders without errors", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductDetails />
        </BrowserRouter>
      </Provider>
    );
  });
  it("renders without errors", () => {

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Productpage
            data={product}
            state={{ wishlist: wishlistState, cart: cartState }}
          />
        </BrowserRouter>
      </Provider>
    );
  });
  test('to test some data ids',()=>{
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Productpage
            data={product}
            state={{ wishlist: wishlistState, cart: cartState }}
          />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId('card')).toBeInTheDocument;
    expect(screen.getByTestId('add to cart')).toBeInTheDocument;
    expect(screen.getByTestId('add to wishlist')).toBeInTheDocument;
  })
});
