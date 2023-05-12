import CartCards from "../cart/CartCards";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CheckoutBlock, MainContainer } from "./CartStyle";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
import { cartActions } from "../../redux/slice/cartSlice";
import { getCartData, getCartQuantity, selectUserName } from "../../redux/slice/selector";
import { GiShoppingCart } from "react-icons/gi";
import {EmptyMessage} from './emptyMessage/EmptyMessage'
import { cartData } from "../type";


const Cart = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const cartData = useSelector(getCartData);
  const add = async () => {
    await dispatch(cartActions.addCartToFirestore(userName));
  };

  add();
  const totalItems = useSelector(getCartQuantity);
  return (
    <MainContainer data-testid='cart'>
      {userName !== null ? (
        <>
          {cartData.length <= 0 ? (
            <EmptyMessage message={"Your cart is empty"} icon={<GiShoppingCart />} />
          ) : (
            <>
              {
                <CheckoutBlock>
                  <NavLink to="/checkout">
                    <button >
                      Procced to buy <b>{totalItems.totalCount}</b> items
                    </button>
                  </NavLink>
                  <div>
                    Total Cart Value :<BsCurrencyRupee />
                    {totalItems.totalPrice}
                  </div>
                </CheckoutBlock>
              }
              {cartData.map((item: cartData) => {
                console.log(item.imageUrl)
                return (
                  <CartCards
                  // data={item}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    description={item.description}
                    name={item.name}
                    product_id={item.product_id}
                    quantity={item.quantity}
                    totalPrice={item.totalPrice}
                  />
                );
              })}
            </>
          )}
        </>
      ) : (
        <EmptyMessage
          message={"Login to add item to cart"}
          icon={<GiShoppingCart />}
          button={"Log In"}
        />
      )}
    </MainContainer>
  );
};

export default Cart;
