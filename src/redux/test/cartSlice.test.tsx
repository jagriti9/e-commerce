import { cartActions, cartSlice } from "../slice/cartSlice";
const dummyData = {
  image: { src: "https://example.com/image.png", alt: "Example image" },
  price: 10,
  description: "Example product",
  parent_id: 1,
  category_id: 2,
  name: "Example name",
  product_id: 3,
  quantity: 1,
  totalPrice: 10,
};
describe("cart slice", () => {
  test("should add an item to the cart if it does not already exist", () => {
    const initialState = {
      cart: [],
      totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
    };
    const action = cartActions.addItemToCart({
      image: { src: "https://example3.com/image.png", alt: "Example image" },
      price: 20,
      description: "this is a dummy 3 product ",
      parent_id: 1,
      category_id: 2,
      name: "dummy 3",
      product_id: "dummy product 3",
      quantity: 0,
      totalPrice: 20,
    });
    const newState = cartSlice.reducer(initialState, { ...action });

    expect(newState.cart).toEqual([
      {
        image: { src: "https://example3.com/image.png", alt: "Example image" },
        price: 20,
        description: "this is a dummy 3 product ",
        parent_id: 1,
        category_id: 2,
        name: "dummy 3",
        product_id: "dummy product 3",
        quantity: 1,
        totalPrice: 20,
      },
    ]);
  });
  test("to increase the quantity of the product", () => {
    const initialState = {
      cart: [
        {
          image: { src: "https://example.com/image.png", alt: "Example image" },
          price: 10,
          description: "Example product",
          parent_id: 1,
          category_id: 2,
          name: "Example name",
          product_id: 3,
          quantity: 1,
          totalPrice: 10,
        },
      ],
      totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
    };
    const increaseAction = cartActions.increaseCartValue(dummyData.product_id);
    const newState = cartSlice.reducer(initialState, increaseAction);
    expect(newState.cart).toEqual([
      {
        image: { src: "https://example.com/image.png", alt: "Example image" },
        price: 10,
        description: "Example product",
        parent_id: 1,
        category_id: 2,
        name: "Example name",
        product_id: 3,
        quantity: 2,
        totalPrice: 20,
      },
    ]);
  });
  test("to decrease the quantity of the product", () => {
    const initialState = {
      cart: [
        {
          image: { src: "https://example.com/image.png", alt: "Example image" },
          price: 10,
          description: "Example product",
          parent_id: 1,
          category_id: 2,
          name: "Example name",
          product_id: 3,
          quantity: 1,
          totalPrice: 10,
        },
      ],
      totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
    };
    const increaseAction = cartActions.decreaseCartValue(dummyData.product_id);
    const newState = cartSlice.reducer(initialState, increaseAction);
    expect(newState.cart).toEqual([
      {
        image: { src: "https://example.com/image.png", alt: "Example image" },
        price: 10,
        description: "Example product",
        parent_id: 1,
        category_id: 2,
        name: "Example name",
        product_id: 3,
        quantity: 0,
        totalPrice: 0,
      },
    ]);
  });
  test("to remove item to cart", () => {
    const initialState = {
      cart: [
        {
          image: {
            src: "https://example1.com/image.png",
            alt: "Example image",
          },
          price: 10,
          description: "Example1 product",
          parent_id: 1,
          category_id: 2,
          name: "Example1 name",
          product_id: 3,
          quantity: 1,
          totalPrice: 10,
        },
        {
          image: {
            src: "https://example2.com/image.png",
            alt: "Example image",
          },
          price: 20,
          description: "Example2 product",
          parent_id: 1,
          category_id: 2,
          name: "Example2 name",
          product_id: 4,
          quantity: 1,
          totalPrice: 10,
        },
      ],
      totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
    };
    const removeFromCart = cartActions.removeItemFromCart(3);
    const newState = cartSlice.reducer(initialState, removeFromCart);
    expect(newState.cart).toEqual([
      {
        image: { src: "https://example2.com/image.png", alt: "Example image" },
        price: 20,
        description: "Example2 product",
        parent_id: 1,
        category_id: 2,
        name: "Example2 name",
        product_id: 4,
        quantity: 1,
        totalPrice: 10,
      },
    ]);
  });
  test("to add data to firestore", () => {
    const initialState = {
      cart: [
        {
          image: { src: "https://example.com/image.png", alt: "Example image" },
          price: 10,
          description: "Example product",
          parent_id: 1,
          category_id: 2,
          name: "Example name",
          product_id: 3,
          quantity: 1,
          totalPrice: 10,
        },
      ],
      totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
    };
    const ActionAddToFirestore = cartActions.addCartToFirestore("Jagriti");
    const newState = cartSlice.reducer(initialState, ActionAddToFirestore);
    expect(newState.cart).toEqual([
      {
        image: { src: "https://example.com/image.png", alt: "Example image" },
        price: 10,
        description: "Example product",
        parent_id: 1,
        category_id: 2,
        name: "Example name",
        product_id: 3,
        quantity: 1,
        totalPrice: 10,
      },
    ]);
  });
  test("to clear data", () => {
    const initialState = {
      cart: [
        {
          image: { src: "https://example.com/image.png", alt: "Example image" },
          price: 10,
          description: "Example product",
          parent_id: 1,
          category_id: 2,
          name: "Example name",
          product_id: 3,
          quantity: 1,
          totalPrice: 10,
        },
      ],
      totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
    };
    const action = cartActions.clearCart();
    const newState = cartSlice.reducer(initialState, action);
    expect(newState.cart).toEqual([]);
  });
  test("get wishlist data from firestore", () => {
    const initialState = {
      cart: [],
      totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
    };
    const dummyData = [
      {
        name: "dummy product",
        product_id: 3,
      },
    ];
    const action = cartActions.getCartFromFirestore(dummyData);
    const newState = cartSlice.reducer(initialState, action);
    expect(newState.cart).toEqual(dummyData);
  });
  test("to set total quantity and price", () => {
    const initialState = {
      cart: [
        {
          image: { src: "https://example.com/image.png", alt: "Example image" },
          price: 10,
          description: "Example product",
          parent_id: 1,
          category_id: 2,
          name: "Example name",
          product_id: 3,
          quantity: 1,
          totalPrice: 10,
        },
      ],
      totalQuantityAndPrice: { totalCount: 1, totalPrice: 10 },
    };
    const action = cartActions.totalQuantityInCart();
    const newState = cartSlice.reducer(initialState, action);
    expect(newState.cart).toEqual([
      {
        image: { src: "https://example.com/image.png", alt: "Example image" },
        price: 10,
        description: "Example product",
        parent_id: 1,
        category_id: 2,
        name: "Example name",
        product_id: 3,
        quantity: 1,
        totalPrice: 10,
      },
    ]);
    expect(newState.totalQuantityAndPrice).toEqual({
      totalCount: 1,
      totalPrice: 10,
    });
  });
});
