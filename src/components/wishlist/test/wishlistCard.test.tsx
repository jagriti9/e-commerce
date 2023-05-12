import { Provider } from "react-redux";
import WishlistCard from "../wishlistCard";
import { store } from "../../../redux/store";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, getByTestId, render } from "@testing-library/react";

describe("WishlistCard component", () => {
    test("renders wishlist component without crashing", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <WishlistCard />
          </BrowserRouter>
        </Provider>
      );
    });
    test('to check if add to cart button works',()=>{
      const { container }= render(
            <Provider store={store}>
              <BrowserRouter>
                <WishlistCard />
              </BrowserRouter>
            </Provider>
          );
          const button = getByTestId(container, "add to cart");
          fireEvent.click(button);
    })
})