import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyOrderCards from "../orders/MyOrderCards";
import {
  checkoutAction,
  checkoutSlice,
} from "../../../redux/slice/checkoutSlice";
const data = [
  {
    parent_id: 1,
    imageUrl: "dummy.jpg",
    name: "dummy",
    price: 10,
    description: "this is a dummy product",
    category_id: 1,
    product_id: "dummy product",
  },
];
const userDetails = [{ name: "jagriti", email: "jagriti.gmail.com" }] as any;
describe("my order cards  component", () => {
  test("to see if it renders account component without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyOrderCards
            orderData={data}
            userData={userDetails.map((item: any) => item.OrderdOn)}
          />
        </BrowserRouter>
      </Provider>
    );
  });
  test("to check if it navigates on button click", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyOrderCards
            orderData={data}
            userData={userDetails.map((item: any) => item.OrderdOn)}
          />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(getByRole("button"));
    expect((window.location.pathname = "/checkout"));
  });
  test("should add an item to the order", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyOrderCards
            orderData={data}
            userData={userDetails.map((item: any) => item.OrderdOn)}
          />
        </BrowserRouter>
      </Provider>
    );
    const initialState = {
      checkout: [] as any,
      userDetails: [] as any,
      previousOrders: [] as any,
    };
    const action = checkoutAction.addToCheckout({
      parent_id: 1,
      imageUrl: "dummy3.jpg",
      name: "dummy 3",
      price: 10,
      description: "this is a dummy product",
      category_id: 1,
      product_id: "dummy product 3",
    });
    const newState = checkoutSlice.reducer(initialState, action);

    expect(newState.checkout).toEqual({
      parent_id: 1,
      imageUrl: "dummy3.jpg",
      name: "dummy 3",
      price: 10,
      description: "this is a dummy product",
      category_id: 1,
      product_id: "dummy product 3",
    });
  });
});
