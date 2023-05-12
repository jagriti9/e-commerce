import {
  AccountDetailsContainer,
  Container,
  MainContainer,
  OrderContainer,
} from "./style";
import { NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <MainContainer>
      <Container>
        <NavLink to='/my-orders'><OrderContainer>Orders</OrderContainer></NavLink>
        <NavLink to='/account-details'><AccountDetailsContainer>Account Details</AccountDetailsContainer></NavLink>
      </Container>
      <Outlet/>
    </MainContainer>
  );
};

export default Account;
