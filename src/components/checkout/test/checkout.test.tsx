import Checkout from "..";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import "@testing-library/jest-dom";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import OrderPlaced from "../OrderPlaced";

describe("Checkout component", () => {
  test("renders checkout component without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Checkout />
        </BrowserRouter>
      </Provider>
    );
  });
  test("should not set errors for valid input in checkout form", () => {
    const { getByLabelText, queryByText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Checkout />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(getByLabelText("Name:"), {
      target: { value: "validName" },
    });
    fireEvent.change(getByLabelText("Email:"), {
      target: { value: "validemail@example.com" },
    });
    fireEvent.change(getByLabelText("Phone Number:"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(getByLabelText("Shipping Address:"), {
      target: { value: "jaipur" },
    });

    fireEvent.submit(getByText("Place order"));
    expect(queryByText("Name is required")).not.toBeInTheDocument();
    expect(queryByText("Email is invalid")).not.toBeInTheDocument();
    expect(queryByText("Phone Number is required")).not.toBeInTheDocument();
    expect(queryByText("Address is required")).not.toBeInTheDocument();
  });
});
describe("Order Placed", () => {
  test("renders order placed component without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OrderPlaced />
        </BrowserRouter>
      </Provider>
    );
  });
  test("to check if it navigates on button click", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <OrderPlaced />
        </BrowserRouter>
      </Provider>
    );
    const button = getByTestId(container, "continue");
    fireEvent.click(button);
    expect((window.location.pathname = "/"));
  });
});
