import { useSelector } from "react-redux";
import { selectUserDomain } from "../../../redux/slice/selector";
import { Container, MainContainer } from "../style";
import constants from "../../constants.json";
const AccountDetails = () => {
  const userDetails = useSelector(selectUserDomain);

  return (
    <MainContainer>
      <Container>
        {constants.name} : {userDetails.userName}
        <br />
        {constants.email} :{userDetails.userEmail}
      </Container>
    </MainContainer>
  );
};

export default AccountDetails;
