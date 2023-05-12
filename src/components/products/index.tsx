import { collection, getDocs, query } from "firebase/firestore";
import { database } from "../../firebase";
import { CSSProperties, useEffect, useState } from "react";
import Cards from "./Cards";
import { FilterMenu, MainContainer } from "./CardsStyle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slice/productSlice";
import { MoonLoader } from "react-spinners";
import {
  getCartData,
  getWishlistData,
  selectCategory,
  selectFilter,
  selectSearch,
} from "../../redux/slice/selector";
import { EmptyMessage } from "../cart/emptyMessage/EmptyMessage";
import { cartData, wishlistData } from "../type";

const override: CSSProperties = {
  margin: "60px auto",
};

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [categoryId, setCategoryId] = useState<number>(0);

  const productRef = collection(database, "Products");
  const categoriesRef = collection(database, "Categories");

  const dispatch = useDispatch();
  const searchText = useSelector(selectSearch);
  const searchCategoryProducts = useSelector(selectCategory);
  const filterQuery = useSelector(selectFilter);
  const wishlistData = useSelector(getWishlistData);
  const cartData = useSelector(getCartData);
  const wishlistId = wishlistData.map((item: wishlistData) => {
    return item.product_id;
  });
  const cartId = cartData.map((item: cartData) => {
    return item.product_id;
  });

  const getAllProducts = async () => {
    const productsData: wishlistData[] = [];
    const querySnapshot = await getDocs(productRef);
    querySnapshot.forEach((doc) => {
      const details = {
        product_id: doc.id,
        parent_id: doc.data().parent_id,
        category_id: doc.data().category_id,
        description: doc.data().description,
        imageUrl: doc.data().imageUrl,
        name: doc.data().name,
        price: doc.data().price,
      };
      productsData.push(details);
    });
    dispatch(productActions.addAllProducts(productsData));
  };
  const allProducts = [useSelector((state: any) => state.products.allProducts)];

  const getCategoryId = async () => {
    const myQuery = query(categoriesRef);
    const mySnapshot = await getDocs(myQuery);
    mySnapshot.forEach((myDoc) => {
      if (myDoc.id === filterQuery) {
        setCategoryId(myDoc.data().parent_id);
      }
    });
  };

  let products: any = [];
  const getData = () => {
    allProducts.map((item: any) =>
      Object.values(item).map((data: any) => {
        if (searchText !== "") {
          if (
            data.name.toLowerCase().includes(searchText?.toLowerCase().trim())
          ) {
            products.push(data);
          }
        } else if (searchCategoryProducts !== "") {
          {
            if (data.parent_id == searchCategoryProducts) {
              products.push(data);
            }
          }
        } else {
          products.push(data);
        }
      })
    );
    if (filterQuery !== "") {
      products = products.filter((item: any) => item.price < filterQuery);
    }
    setFilteredProducts([...products]);
  };

  useEffect(() => {
    getAllProducts();
    getData();
    getCategoryId();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [filterQuery, searchText, searchCategoryProducts]);
  return (
    <div>
      <MainContainer>
        <FilterMenu>
          Range :
          {
            <input
              type="range"
              min="0"
              max="100000"
              value={filterQuery === "" ? "100000" : filterQuery}
              id="myRange"
              onChange={(e) =>
                dispatch(productActions.setFilterQuery(e.target.value))
              }
            />
          }
          {filterQuery}
        </FilterMenu>
        {loading ? (
          <MoonLoader
            color={"rgb(54, 85, 224)"}
            loading={loading}
            cssOverride={override}
            size={100}
          />
        ) : (
          <>
            {filteredProducts.length === 0 ? (
              <EmptyMessage message="No Products Found"></EmptyMessage>
            ) : (
              filteredProducts.map((item: any) => {
                const wishlistState: boolean = wishlistId.includes(
                  item.product_id
                );
                const cartState: boolean = cartId.includes(item.product_id);
                return (
                  <Cards
                    data={item}
                    state={{ wishlist: wishlistState, cart: cartState }}
                  />
                );
              })
            )}
          </>
        )}
      </MainContainer>
    </div>
  );
};

export default Products;
