import { BsCurrencyRupee } from "react-icons/bs";
import styled from "styled-components";
export const MainContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  background:${props=>props.theme.bg} ;
  min-height: 100vh;
  max-height: max-content;
  padding-bottom:2rem;
  @media (max-width: 800px) {
    font-size: 15px;
  }
  `;
export const Container = styled.div`
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 1.5rem;
  background-color: rgb(211, 227, 240);
  color:#000;
`;
export const ImageContainer = styled.div`
  box-sizing: border-box;
  width: 25%;
  height: 16rem;
  margin: 0rem 0px 0px 1rem;
  padding: 0.6rem 0.7rem;
  background: #fff;
  img {
    width: 98%;
    height: 14rem;
  }
`;
export const DetailsContainer = styled.div`
  width: 60%;
  height: 16rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 9rem 2rem;
`;
export const DescriptionContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1;
  margin: 15px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PriceContainer = styled.div`
  /* display: block; */
  grid-column: 1/4;
  grid-row: 2;
  margin: 0px 2rem;
  display: flex;
  div {
    width: 30rem;
    margin-left: 12rem;
    @media (max-width: 800px) {
      margin: 0px 6rem;
    }
  }
`;
export const PriceIcon = styled(BsCurrencyRupee)`
margin-top:5px;
`
export const QuantityContainer = styled.div`
  margin: auto;
`;
export const ActionButtons = styled.button`
  background-color: rgb(82, 113, 255);
  color: rgb(211, 227, 240);
  border: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: 0.2rem;
  padding: 0.3rem 0.6rem;
  margin: 0px 1rem;
`;
export const DeleteCartContainer = styled.div`
  margin: auto 2rem;
  button {
    background: rgb(82, 113, 255);
    border: none;
    border-radius: 0.3rem;
    padding: 0.3rem 0.6rem;
  }
`;
export const WishlistContainer = styled.div`
  margin: auto 2rem;
  width: 100%;
  button {
    background-color: rgb(82, 113, 255);
    border: none;
    border-radius: 0.2rem;
    padding: 0.5rem 0.6rem;
  }
`;
export const CheckoutBlock = styled.div`
  width: 100%;
  text-align: center;
  margin: 4rem 7rem 2rem 0rem;
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    border-radius: 0.3rem;
    width: 15rem;
    height: 2rem;
    margin-right: 2rem;
    padding-top: 0.4rem;
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 800px) {
      width: 80%;
      font-size: 14px;
    }
  }
  svg {
    margin: -4px 0px;
  }
`;
export const EmptyMessageContainer = styled.div`
margin: auto;
min-height:100vh;
max-height:max-content;
font-size: 3rem;
color:${prop => prop.theme.primary};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
svg{
font-size: 20rem;
fill:${prop => prop.theme.primary};
border-radius: 50%;
background: ${prop => prop.theme.cardBg};
}
@media only screen and (min-width: 0px) and (max-width: 400px) {
font-size: 1rem;
svg{
  font-size: 10rem;
}
  }
  @media only screen and (min-width: 400px) and (max-width: 768px) {
font-size: 2rem;
svg{
  font-size: 15rem;
}
  }
`