import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCartData, getWishlistData,getAllProducts } from "../../../redux/slice/selector";
import Productpage from "./ProdcutPage";
import { cartData, wishlistData } from "../../type";

const ProductDetails = () => {
  const { id } = useParams();
  const allProducts = useSelector(getAllProducts);
  const index = Object.values(allProducts).findIndex(
    (data: any) => data.product_id === id
  );
  const product = allProducts[index];
  const wishlistData = useSelector(getWishlistData);
  const cartData = useSelector(getCartData);
  const wishlistId = wishlistData
    ? wishlistData.map((item: wishlistData) => {
        return item.product_id;
      })
    : [];
  const cartId = cartData
    ? cartData.map((item: cartData) => {
        return item.product_id;
      })
    : [];

  const wishlistState = product && wishlistId.includes(product.product_id);
  const cartState = product && cartId.includes(product.product_id);

  return (
    <div>
      {product && (
        <Productpage
          data={product}
          state={{ wishlist: wishlistState, cart: cartState }}
        />
      )}
    </div>
  );
};

export default ProductDetails;
