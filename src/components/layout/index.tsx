import { MainContainer } from "./style";
import UserNavigation from "./UserNavigation";
import ProductNavigation from "./ProductNavigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
const BasicLayout = () => {
  return (
    <>
      <MainContainer>
        {<a id="top"></a>}
        <UserNavigation />
        <ProductNavigation />
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
};

export default BasicLayout;
