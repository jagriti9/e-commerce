import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { userAction, userSlice } from "../../../redux/slice/userSlice";
import SignUp from "../SignUp";

describe("User Authentication Component", () => {
  test("to check if the component renders properly", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>{" "}
      </Provider>
    );
  });

  test("to handle when user sign out", async () => {
    const previousState = {
      userName: null,
      userEmail: null,
      isSignedIn: false,
    };
    await waitFor(() =>
      expect(
        userSlice.reducer(previousState, userAction.setUserInActive())
      ).toEqual({
        userName: null,
        userEmail: null,
        isSignedIn: false,
      })
    );
  });
  test("to handle when user sign in", async () => {
    const previousState = {
      userName: null,
      userEmail: null,
      isSignedIn: false,
    };
    await waitFor(() =>
      expect(
        userSlice.reducer(
          previousState,
          userAction.setUserActive({
            name: "dummyName",
            email: "dummyEmail@gmail.com",
          })
        )
      ).toEqual({
        userName: "dummyName",
        userEmail: "dummyEmail@gmail.com",
        isSignedIn: true,
      })
    );
  });

  test("should not set errors for valid input in sign up", () => {
    const { getByLabelText, queryByText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>{" "}
      </Provider>
    );
    fireEvent.change(getByLabelText("User Name"), {
      target: { value: "validName" },
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "validemail@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });
    fireEvent.change(getByLabelText("Confirm Password"), {
      target: { value: "password123" },
    });

    fireEvent.submit(getByText("Sign In"));
    expect(queryByText("Name is required")).not.toBeInTheDocument();
    expect(queryByText("Email is invalid")).not.toBeInTheDocument();
    expect(queryByText("Password is required")).not.toBeInTheDocument();
    expect(queryByText("Confirm password is required")).not.toBeInTheDocument();
  });

  test("should set errors for invalid input in sign up", () => {
    const { getByLabelText, queryByText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>{" "}
      </Provider>
    );
    fireEvent.change(getByLabelText("User Name"), {
      target: { value: "" },
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "123" },
    });
    fireEvent.change(getByLabelText("Confirm Password"), {
      target: { value: "123456" },
    });

    fireEvent.submit(getByText("Sign In"));
    expect(queryByText("Name is required")).toBeInTheDocument();
    expect(getByText("Email is required")).toBeInTheDocument();
    expect(
      getByText("Password must be at least 6 characters")
    ).toBeInTheDocument();
    expect(getByText("Passwords do not match")).toBeInTheDocument();
  });
});
