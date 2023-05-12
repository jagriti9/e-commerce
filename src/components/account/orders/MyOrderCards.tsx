import { useDispatch } from "react-redux";
import {
  Box1,
  Box2,
  DescriptionContainer,
  ImageContainer,
  MyOrderContainer,
  Name,
  Order,
  Price,
  ReapetOrder,
} from "../style";
import { checkoutAction } from "../../../redux/slice/checkoutSlice";
import { useNavigate } from "react-router-dom";
import constants from "../../constants.json";

const MyOrderCards = (data: { orderData: any; userData: any }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const repeatOrder = () => {
    dispatch(checkoutAction.addToCheckout([data.orderData]));
    navigate("/checkout");
  };

  return (
    <>
    {data.orderData.map((item:any)=>
      <MyOrderContainer>
        <Box1>
          <Name>
            {constants.name} :{item.name}
          </Name>
          <Price>
            {constants.price} : {item.price}
          </Price>
          <Order>Ordered On {data.userData[0]}</Order>
        </Box1>
        <Box2>
          <ImageContainer>
            <img src={item.imageUrl} />
          </ImageContainer>
          <DescriptionContainer>
            {item.description}
          </DescriptionContainer>
          <ReapetOrder>
            <button onClick={repeatOrder}>Repeat</button>
          </ReapetOrder>
        </Box2>
      </MyOrderContainer>
    )}
    </>
  );
};

export default MyOrderCards;
