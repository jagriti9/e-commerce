import { productActions, productSlice } from "../slice/productSlice";
const initialState = {
  search: ``,
  category: ``,
  filter: ``,
  allProducts: [],
};
describe("product slice", () => {
  test("to add products to store", () => {
    const dummyData = {
      0: { product_id: 3, name: "dummy product 1" },
      1: { product_id: 4, name: "dummy product 2" },
    };
    const allProductsAction = productActions.addAllProducts(dummyData);
    const newState = productSlice.reducer(initialState, allProductsAction);
    expect(newState.allProducts).toEqual({
      0: { product_id: 3, name: "dummy product 1" },
      1: { product_id: 4, name: "dummy product 2" },
    });
  });
  test("to test search action", () => {
    const text = "hello";
    const searchAction = productActions.setSearch(text);
    const newState = productSlice.reducer(initialState, searchAction);
    expect(newState.search).toEqual(text);
  });
  test("to test category action", () => {
    const text = "mobile";
    const categoryAction = productActions.setCategoriesValue(text);
    const newState = productSlice.reducer(initialState, categoryAction);
    expect(newState.category).toEqual(text);
  });
  test("to test filter action", () => {
    const text = "laptop";
    const filterAction = productActions.setFilterQuery(text);
    const newState = productSlice.reducer(initialState, filterAction);
    expect(newState.filter).toEqual(text);
  });
});
