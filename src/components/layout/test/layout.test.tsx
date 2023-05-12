import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import BasicLayout from "..";
import { BrowserRouter } from "react-router-dom";
import UserNavigation from "../UserNavigation";
import Footer from "../Footer";

describe("BasicLayout component", () => {
  test("renders layout component without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <BasicLayout />
        </BrowserRouter>{" "}
      </Provider>
    );
  });
  test("Should check if text is present userNavigation component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserNavigation />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Logo/i)).toBeInTheDocument();
  });
  test("see if navigates to home page", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserNavigation />
        </BrowserRouter>
      </Provider>
    );
    const logo = (screen.getByText(/Logo/i))
    fireEvent.click(logo)
    expect(window.location.pathname='/')
  });
  test('to check if text exist on the footer',()=>{
    render(      <Provider store={store}>
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
    </Provider>)
    expect(screen.getByText(/back to top/i)).toBeInTheDocument()
  })
});
