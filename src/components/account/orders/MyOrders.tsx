import {
  getOrderItems,
  selectUserName,
} from "../../../redux/slice/selector";
import { useSelector } from "react-redux";
import MyOrderCards from "./MyOrderCards";
import { MainContainer } from "../style";
import { EmptyMessage } from "../../cart/emptyMessage/EmptyMessage";

const MyOrders = () => {
  const userName = useSelector(selectUserName);
  const getOrders = useSelector(getOrderItems); 
  return (

    <MainContainer data-testid="no orders">
      {userName !== null ? (
        <>
            {getOrders.length >= 0 ? (
              getOrders.map((data: any) => {
                return (
                  <MyOrderCards
                    orderData={data.orderedItems}
                    userData={Object.values(data.userDetails).map((item:any)=>item.OrderdOn)}
                  />
                );
            })
            ) : (
              <EmptyMessage message={"You haven't ordered anything yet"} />
            )}
        </>
      ) : (
        <EmptyMessage message={"Login to see your orders"} button={"Log In"} />
      )}
    </MainContainer>
  );
};

export default MyOrders;
