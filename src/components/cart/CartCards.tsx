import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  Container,
  DeleteCartContainer,
  DescriptionContainer,
  DetailsContainer,
  ImageContainer,
  PriceContainer,
  QuantityContainer,
  WishlistContainer,
  ActionButtons,
  PriceIcon,
} from "./CartStyle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { wishlistActions } from "../../redux/slice/wishlistSlice";
import { cartActions } from "../../redux/slice/cartSlice";
import { ToastContainer } from "react-toastify";
import { cartData } from "../type";
const CartCards = ({
  imageUrl,
  price,
  description,
  parent_id,
  category_id,
  name,
  product_id,
  quantity,
  totalPrice,
}: cartData) => {
  const [addWishlist, setAddWishlist] = useState(false);
  const dispatch = useDispatch();

  const addToWishlist = () => {
    setAddWishlist(!addWishlist);
    if (addWishlist) {
      dispatch(
        wishlistActions.removefromWishlist({
          parent_id: parent_id,
          imageUrl: imageUrl,

          name: name,
          price: price,
          description: description,
          category_id: category_id,
          product_id: product_id,
        })
      );
    } else {
      dispatch(
        wishlistActions.addItemToWishlist({
          parent_id: parent_id,
          imageUrl: imageUrl,

          name: name,
          price: price,
          description: description,
          category_id: category_id,
          product_id: product_id,
        })
      );
    }
  };
  const deleteItem = () => {
    dispatch(cartActions.removeItemFromCart(product_id));
    dispatch(cartActions.totalQuantityInCart());
  };
  const increaseQuantity = () => {
    dispatch(cartActions.increaseCartValue(product_id));
    dispatch(cartActions.totalQuantityInCart());
  };

  const decreaseQuantity = () => {
    if (quantity < 1) {
      deleteItem();
    } else {
      dispatch(cartActions.decreaseCartValue(product_id));
      dispatch(cartActions.totalQuantityInCart());
    }
  };
  console.log(imageUrl, price);
  return (
    <Container data-testId="cart">
      <ToastContainer />
      <ImageContainer>
        <img src={imageUrl} />
      </ImageContainer>
      <DetailsContainer>
        <DescriptionContainer>{description}</DescriptionContainer>
        <PriceContainer>
          <PriceIcon />
          {price}
          <div>
            Total Value:
            <PriceIcon />
            {totalPrice}
          </div>
        </PriceContainer>
        <DeleteCartContainer>
          <button onClick={deleteItem}>Delete item</button>
        </DeleteCartContainer>
        <QuantityContainer>
          <ActionButtons onClick={() => increaseQuantity()}>+</ActionButtons>
          {quantity > 0 ? quantity : <>{deleteItem()}</>}
          <ActionButtons onClick={() => decreaseQuantity()}>-</ActionButtons>
        </QuantityContainer>

        <WishlistContainer>
          <button onClick={addToWishlist} data-testid="addToWishlist">
            {addWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </WishlistContainer>
      </DetailsContainer>
    </Container>
  );
};

export default CartCards;
