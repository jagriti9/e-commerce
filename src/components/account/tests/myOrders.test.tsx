import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { BrowserRouter } from "react-router-dom";
import MyOrders from "../orders/MyOrders";

describe('my orders component',()=>{
    test("renders 'Login to see your orders' when user is not logged in", () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <MyOrders />
            </BrowserRouter>
          </Provider>
        );
        expect(screen.getByText(/login to see your orders/i)).toBeInTheDocument();
      });
})