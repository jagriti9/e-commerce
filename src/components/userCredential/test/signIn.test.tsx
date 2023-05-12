import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { BrowserRouter } from "react-router-dom";
import SignIn from "../SignIn";

describe("SignIn component", () => {
  test("to check if the component renders properly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>{" "}
      </Provider>
    );
  });
  test("test to check if the navigation to signin component", () => {
    expect(window.location.href).toBe("http://localhost/");
  });
  test("should not set errors for valid input", () => {
    const { getByLabelText, queryByText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>{" "}
      </Provider>
    );
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "validemail@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.submit(getByText("Log In"));
    expect(queryByText("Email is invalid")).not.toBeInTheDocument();
    expect(queryByText("Password is required")).not.toBeInTheDocument();
  });
});
