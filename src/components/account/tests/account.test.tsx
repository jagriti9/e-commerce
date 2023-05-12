import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Account from "..";
import { BrowserRouter } from "react-router-dom";
describe("account  component", () => {
  test("to see if it renders account component without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Account />
        </BrowserRouter>
      </Provider>
    );
  });
 

});
