import { useNavigate } from "react-router-dom";
import { EmptyMessageContainer } from "../CartStyle";

export const EmptyMessage = (prop: {
  message: string;
  icon?: any;
  button?: string;
}) => {
  const navigate = useNavigate();
  return (
    <EmptyMessageContainer>
      <div>{prop.icon}</div>
      <div>{prop.message}</div>
      <div>
        <button onClick={() => navigate("/sign-in")}>{prop.button}</button>
      </div>
    </EmptyMessageContainer>
  );
};