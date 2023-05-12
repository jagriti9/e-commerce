import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { wishlistActions } from "../../redux/slice/wishlistSlice";
import { getWishlistData, selectUserName } from "../../redux/slice/selector";
import WishlistCard from "./wishlistCard";
import { MainContainer } from "./wishlistCardStyle";
import { EmptyMessage } from "../cart/emptyMessage/EmptyMessage";

const Wishlist = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const wishlistData = useSelector(getWishlistData);
  const add = async () => {
    await dispatch(wishlistActions.addWishlistToFirestore(userName));
  };
  add();
  return (
    <MainContainer data-TestId="loader">
      {userName !== null ? (
        <>
          {wishlistData.length <= 0 ? (
            <EmptyMessage message={"WishList is empty"} />
          ) : (
            <>
              {wishlistData.map((item: any) => {
                return <WishlistCard {...item} />;
              })}
            </>
          )}
        </>
      ) : (
        <EmptyMessage message={"Login to add item to wishlist"} button={"Log In"} />
      )}
    </MainContainer>
  );
};

export default Wishlist;
