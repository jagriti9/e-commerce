import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Wishlist from "..";
import { BrowserRouter } from "react-router-dom";

describe("Wishlist component", () => {
  test("renders wishlist component without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Wishlist />
        </BrowserRouter>
      </Provider>
    );
  });

  test("renders loader when loading is true", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Wishlist />
        </BrowserRouter>
      </Provider>
    );
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
