import { wishlistActions, wishlistSlice } from "../slice/wishlistSlice";

describe("wishlist slice", () => {
  test("should add an item to the wishlist if it does not already exist", () => {
    const initialState = {
      wishlist: [
        {
          parent_id: 1,
          imageUrl: "dummy1.jpg",
          name: "dummy 1",
          price: 10,
          description: "this is a dummy product",
          category_id: 1,
          product_id: "dummy product 1",
        },
        {
          parent_id: 1,
          imageUrl: "dummy2.jpg",
          name: "dummy 2",
          price: 10,
          description: "this is a dummy product",
          category_id: 1,
          product_id: "dummy product 2",
        },
      ],
    };
    const action = wishlistActions.addItemToWishlist({
      parent_id: 1,
      imageUrl: "dummy3.jpg",
      name: "dummy 3",
      price: 10,
      description: "this is a dummy product",
      category_id: 1,
      product_id: "dummy product 3",
    });
    const newState = wishlistSlice.reducer(initialState, action);

    expect(newState.wishlist).toContainEqual({
      parent_id: 1,
      imageUrl: "dummy3.jpg",
      name: "dummy 3",
      price: 10,
      description: "this is a dummy product",
      category_id: 1,
      product_id: "dummy product 3",
    });
  });
  test("should not add an item to the wishlist if it already exists", () => {
    const initialState = {
      wishlist: [
        { product_id: "1", name: "Product 1" },
        { product_id: "2", name: "Product 2" },
      ],
    };
    const action = wishlistActions.addItemToWishlist({
      product_id: "2",
      name: "Product 2",
    });
    const newState = wishlistSlice.reducer(initialState, action);
    expect(newState.wishlist).toHaveLength(2);
  });
  test("to remove item to wishlist", () => {
    const initialState = {
      wishlist: [
        {
          parent_id: 1,
          imageUrl: "dummy1.jpg",
          name: "dummy 1",
          price: 10,
          description: "this is a dummy product",
          category_id: 1,
          product_id: "dummy product 1",
        },
        {
          parent_id: 1,
          imageUrl: "dummy2.jpg",
          name: "dummy 2",
          price: 10,
          description: "this is a dummy product",
          category_id: 1,
          product_id: "dummy product 2",
        },
      ],
    };
    const removeFromWishlist = wishlistActions.removefromWishlist({
      product_id: "dummy product 2",
    });
    const newState = wishlistSlice.reducer(initialState, removeFromWishlist);
    expect(newState.wishlist).toEqual([
      {
        parent_id: 1,
        imageUrl: "dummy1.jpg",
        name: "dummy 1",
        price: 10,
        description: "this is a dummy product",
        category_id: 1,
        product_id: "dummy product 1",
      },
    ]);
  });
  test("to add data to firestore", () => {
    const initialState = {
      wishlist: [
        {
          image: { src: "https://example.com/image.png", alt: "Example image" },
          price: 10,
          description: "Example product",
          parent_id: 1,
          category_id: 2,
          name: "Example name",
          product_id: 3,
        },
      ],
      totalQuantityAndPrice: { totalCount: 0, totalPrice: 0 },
    };
    const ActionAddToFirestore =
      wishlistActions.addWishlistToFirestore("Jagriti");
    const newState = wishlistSlice.reducer(initialState, ActionAddToFirestore);
    expect(newState.wishlist).toEqual([
      {
        image: { src: "https://example.com/image.png", alt: "Example image" },
        price: 10,
        description: "Example product",
        parent_id: 1,
        category_id: 2,
        name: "Example name",
        product_id: 3,
      },
    ]);
  });
  test("to clear data", () => {
    const initialState = {
      wishlist: [
        { product_id: "1", name: "Product 1" },
        { product_id: "2", name: "Product 2" },
      ],
    };
    const action = wishlistActions.clearWishlist();
    const newState = wishlistSlice.reducer(initialState, action);
    expect(newState.wishlist).toEqual([]);
  });
  test("get wishlist data from firestore", () => {
    const initialState = {
      wishlist: [],
    };

    const dummyData = [
      {
        name: "dummy product",
        product_id: 3,
      },
    ];
    const action = wishlistActions.getWishlistFromFirestore(dummyData);
    const newState = wishlistSlice.reducer(initialState, action);
    expect(newState.wishlist).toEqual(dummyData);
  });
});
