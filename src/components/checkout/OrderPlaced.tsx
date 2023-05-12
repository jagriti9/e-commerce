import { useNavigate } from "react-router-dom";
import { Button, Container } from "./checkoutStyle";
import { MdOutlineDone } from "react-icons/md";
import { EmptyMessage } from "../cart/emptyMessage/EmptyMessage";
const OrderPlaced = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <EmptyMessage
          message={"Your Order has been placed successfully"}
          icon={<MdOutlineDone />}
        />
        <Button onClick={() => navigate("/")} data-testid='continue'>Continue shopping</Button>
      </div>
    </Container>
  );
};

export default OrderPlaced;
