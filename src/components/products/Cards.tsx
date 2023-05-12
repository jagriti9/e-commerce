import {
  ImageContainer,
  DetailsContainer,
  ProductImage,
  ProductPrice,
  ProductName,
  ProductActions,
  Container,
} from "./CardsStyle";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/slice/selector";
import { ToastContainer, toast } from "react-toastify";
import { cartActions } from "../../redux/slice/cartSlice";
import { wishlistActions } from "../../redux/slice/wishlistSlice";
import { wishlistData } from "../type";

const Cards = (props: {
  data:wishlistData;
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
  // const buyNow =()=>{
  //   dispatch(addToCheckout({...prop}))
  // }
  console.log(props.data.imageUrl)
  return (
    <Container data-testid="card">
      <ToastContainer />
      <ImageContainer>
        <ProductImage src={props.data.imageUrl} />
      </ImageContainer>
      <DetailsContainer>
        <ProductName>
          <NavLink to={`/product-details/${props.data.product_id}`}>
            {props.data.description}
          </NavLink>
        </ProductName>
        <ProductActions>
          <ProductPrice>
            <BsCurrencyRupee />
            {props.data.price}
          </ProductPrice>
          <div className="action" role="button">
            <button onClick={addToCart} data-testId="add to cart">
              {props.state.cart ? "added to cart" : "add to cart"}
            </button>
            {/* <ActionButtons onClick={buyNow}>Buy Now</ActionButtons> */}
            <button onClick={addToWishlist} data-testId="add to wishlist">
              {props.state.wishlist ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
        </ProductActions>
      </DetailsContainer>
    </Container>
  );
};

export default Cards;
