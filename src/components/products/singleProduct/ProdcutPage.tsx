import {
  ImageContainer,
  DetailsContainer,
  ProductImage,
  ProductPrice,
  ProductName,
  ProductActions,
  Container,
} from "./ProductPageStyle";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../../../redux/slice/selector";
import { ToastContainer, toast } from "react-toastify";
import { cartActions } from "../../../redux/slice/cartSlice";
import { wishlistActions } from "../../../redux/slice/wishlistSlice";
import { checkoutAction } from "../../../redux/slice/checkoutSlice";
import { wishlistData } from "../../type";

const Productpage = (props: {
  data: wishlistData;
  state: { wishlist: boolean; cart: boolean };
}) => {
  const notify = (message: string) => {
    toast(message, { position: "top-center", autoClose: 2000 });
  };
  const [addWishlist, setAddWishlist] = useState(props.state.wishlist);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserName);
  const addToCart = () => {
    if (userId !== null) {
      dispatch(
        cartActions.addItemToCart({
          ...props.data,
          quantity: 0,
          totalPrice: props.data.price,
        })
      );
      dispatch(cartActions.totalQuantityInCart());
    } else {
      notify("Login to add items to Cart");
    }
  };

  const addToWishlist = () => {
    if (userId !== null) {
      setAddWishlist(!addWishlist);
      if (addWishlist) {
        dispatch(wishlistActions.removefromWishlist({ ...props.data }));
      } else {
        dispatch(wishlistActions.addItemToWishlist({ ...props.data }));
      }
    } else {
      notify("Login to add Item to wishlist");
    }
  };
  const buyNow = () => {
    dispatch(checkoutAction.addToCheckout([props.data]));
  };
  return (
    <Container data-testid="card">
      <ToastContainer />
      <ImageContainer>
        <ProductImage src={props.data.imageUrl} />
      </ImageContainer>
      <DetailsContainer>
        <ProductName>
          {props.data.product_id}
          {props.data.description}
        </ProductName>
        <ProductActions>
          <ProductPrice>
            <BsCurrencyRupee />
            {props.data.price}
          </ProductPrice>
          <div className="action">
            <button onClick={addToCart} data-testId="add to cart">
              {props.state.cart ? "added to cart" : "add to cart"}
            </button>
            <NavLink to="/checkout">
              <button onClick={buyNow}>Buy Now</button>
            </NavLink>
            <button onClick={addToWishlist} data-testId="add to wishlist">
              {props.state.wishlist ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
        </ProductActions>
      </DetailsContainer>
    </Container>
  );
};

export default Productpage;
