import { checkoutAction, checkoutSlice } from "../slice/checkoutSlice";
const initialState = {
  checkout: [],
  userDetails: [],
  previousOrders: []as any
};
describe("checkout slice", () => {
  test("add user details to checkout", () => {
    const action = checkoutAction.addDetailsToCheckout({
      userName: "Jagriti",
      userEmail: "jagriti@gmail.com",
      phoneNumber: "1234567890",
    });
    const newState = checkoutSlice.reducer(initialState, { ...action });
    expect(newState.userDetails).toEqual([
      {
        userName: "Jagriti",
        userEmail: "jagriti@gmail.com",
        phoneNumber: "1234567890",
      },
    ]);
  });
});
