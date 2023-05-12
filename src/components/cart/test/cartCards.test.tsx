import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import CartCards from "../CartCards";
import { BrowserRouter } from "react-router-dom";
import { Container } from "../CartStyle";
const dummyData = {
  imageUrl: "https://example.com/image.png",
  price: 10,
  description: "Example product",
  parent_id: 1,
  category_id: 2,
  name: "Example name",
  product_id: 3,
  quantity: 1,
  totalPrice: 10,
};

describe("CartCards component", () => {
  test("Should check Test Id is present cart component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CartCards {...dummyData} />
        </BrowserRouter>
      </Provider>
    );
  });
  test("to test if test is exist on component", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CartCards {...dummyData} />
        </BrowserRouter>
      </Provider>
    );
    const cart = getByTestId("cart");
    expect(cart).toBeInTheDocument();
  });
  test("to test if style rule works", () => {
    const { container } = render(<Container />);
    expect(container.firstChild).toHaveStyle(`
      width: 90%;
      height: max-content;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 1rem;
      margin-top: 1.5rem;
      background-color: rgb(211, 227, 240);
    `);
  });
});
