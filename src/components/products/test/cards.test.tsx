import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import Cards from "../Cards";
import { fireEvent, getByTestId, render } from "@testing-library/react";
import '@testing-library/jest-dom';
const data ={
  price:10,
  image:'test.png',
  description:'this is a test product',
  name:'test product',
  product_id:'qwert',
  quantity:0,
  totalPrice:10,
}
const stateData={
wishlist:false,
cart:true
}
describe("test of card component", () => {
  test("to test if card test exist on card", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Cards data={data} state={stateData}/>
        </BrowserRouter>
      </Provider>
    );
  });
  test("to test addToWishlist button", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Cards  data={data} state={stateData}/>
        </BrowserRouter>
      </Provider>
    );

    const button = getByTestId(container, "add to wishlist");
    fireEvent.click(button);
  });
  test("to test addToCart button", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Cards  data={data} state={stateData}/>
        </BrowserRouter>
      </Provider>
    );

    const button = getByTestId(container, "add to cart");
    fireEvent.click(button);
  });

  // test("renders with the correct styles", () => {
  //    render(
  //     <Provider store={store}>
  //       <BrowserRouter>
  //         <Cards  data={data} state={stateData}/>
  //       </BrowserRouter>
  //     </Provider>
  //   );
  //   const { getByRole } = render(<button/>);
  //   const button = getByRole('button');
  //   expect(button).toHaveStyle(`
  //       background-color: rgb(82, 113, 255);
  //       color: rgb(211, 227, 240);
  //       border: none;
  //       font-size: 15px;
  //       font-weight: 600;
  //       border-radius: 0.2rem;
  //     `);
  // });
});
