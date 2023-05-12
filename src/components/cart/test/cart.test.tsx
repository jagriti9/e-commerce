import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cart from "..";
import { BrowserRouter } from "react-router-dom";
describe("Cart component", () => {
  test("renders Cart component without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });
  test("get text", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByTestId("cart")).toBeInTheDocument;
  });
});
