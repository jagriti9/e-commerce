import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { BrowserRouter } from "react-router-dom";
import Products from "..";
describe("Product component", () => {
  test("to test if product component render without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Products />
        </BrowserRouter>
      </Provider>
    );
  });
});
