import { BsCurrencyRupee } from "react-icons/bs";
import {
  AddToCart,
  Container,
  DescriptionContainer,
  DetailsContainer,
  ImageContainer,
  PriceContainer,
  RemoveFromWishlist,
} from "./wishlistCardStyle";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { wishlistActions } from "../../redux/slice/wishlistSlice";
import { cartActions } from "../../redux/slice/cartSlice";
import constants from "../constants.json" 
import {wishlistData} from '../type'
const WishlistCard = ({ ...prop }: wishlistData) => {
  const dispatch = useDispatch();
  const [addToWishlist, setAddToWishlist] = useState(true);
  const handleWishlist = () => {
    setAddToWishlist(!addToWishlist);
    if (addToWishlist) {
      dispatch(wishlistActions.removefromWishlist({ ...prop }));
    }
  };
  const handleAddToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        ...prop,
        quantity: 0,
        totalPrice: prop.price,
      })
    );
    dispatch(cartActions.totalQuantityInCart());
  };
  return (
    <Container>
      <ImageContainer>
        <img src={prop.imageUrl} />
      </ImageContainer>
      <DetailsContainer>
        <DescriptionContainer>{prop.description}</DescriptionContainer>
        <PriceContainer>
          <BsCurrencyRupee />
          {prop.price}
        </PriceContainer>
        <AddToCart onClick={handleAddToCart} data-testid='add to cart'>{constants.addToCart}</AddToCart>
        <RemoveFromWishlist onClick={handleWishlist}>
          {addToWishlist ? <AiFillHeart /> : <AiOutlineHeart />}
        </RemoveFromWishlist>
      </DetailsContainer>
    </Container>
  );
};

export default WishlistCard;
