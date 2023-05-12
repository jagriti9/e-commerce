import {
  UserNav,
  Logo,
  UserMenuBar,
  DisplayCount,
  Search,
} from "../layout/style";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { FiHeart, FiUser } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { productActions } from "../../redux/slice/productSlice";
import { selectSearch } from "../../redux/slice/selector";
import { userAction } from "../../redux/slice/userSlice";
import { cartActions } from "../../redux/slice/cartSlice";
import { wishlistActions } from "../../redux/slice/wishlistSlice";
import { checkoutAction } from "../../redux/slice/checkoutSlice";
import constants from "../constants.json";
const UserNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useSelector(selectSearch);
  const userName = useSelector((state: any) => state.user.userName);
  const totalItemsInCart = useSelector((state: any) => state.cart.cart.length);
  const signOut = () => {
    dispatch(cartActions.addCartToFirestore(userName));
    dispatch(wishlistActions.addWishlistToFirestore(userName));
    dispatch(checkoutAction.addCheckoutToFirestore(userName));
    dispatch(userAction.setUserInActive());
    dispatch(cartActions.clearCart());
    dispatch(wishlistActions.clearWishlist());
    dispatch(checkoutAction.clearCheckout());
    navigate("/");
    return auth.signOut();
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(productActions.setSearch(e.target.value));
  };
  const renderPage = () => {
    navigate("/");
    dispatch(productActions.setSearch(""));
    dispatch(productActions.setCategoriesValue(""));
    dispatch(productActions.setFilterQuery(""));
  };
  return (
    <UserNav>
      <Logo onClick={renderPage}>Shopsi</Logo>
      <Search>
        <input
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          className="search-input"
        />
        <BsSearch />
      </Search>
      <UserMenuBar className="user-nav">
        <ul>
          <li>
            {userName !== null ? (
              <>
                <FiUser />
                <ul className="drop-down">
                  <li>
                    <NavLink to="/account">Account</NavLink>
                  </li>
                  <li>
                    <button onClick={signOut} data-testId="home-btn">
                      Sign Out
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <NavLink to="/sign-in">{constants.signIn}</NavLink>
            )}
          </li>
          <NavLink to="/cart">
            <li>
              <BsCart3 />
              <DisplayCount>{totalItemsInCart}</DisplayCount>
            </li>
          </NavLink>
          <NavLink to="/wishlist">
            <li>
              <FiHeart />
            </li>
          </NavLink>
        </ul>
      </UserMenuBar>
    </UserNav>
  );
};

export default UserNavigation;
