import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import AccountDetails from "../accountdetails/AccountDetails";


describe("AccountDetails Component", () => {
  test("to check if the component renders properly", () => {
    render(
      <Provider store={store}>
        <AccountDetails />
      </Provider>
    );
  });
});
