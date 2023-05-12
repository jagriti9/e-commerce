import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0px;
  /* width: 100%; */
  min-height: 100vh;
  max-height: max-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
  color: #000;
`;
export const Container = styled.div`
  margin: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: 000px) and (max-width: 768px) {
    width: 90%;
  }
`;
export const OrderContainer = styled.div`
  border: 2px solid ${(prop) => prop.theme.primary};
  background: ${(prop) => prop.theme.cardBg};
  border-radius: 0.5rem;
  text-align: center;
  width: 10rem;
  height: 3rem;
  padding-top:1.5rem;
  margin-right: 3rem;
  text-decoration: none;
  font-weight: 600;
`;
export const AccountDetailsContainer = styled.div`
  border: 2px solid ${(prop) => prop.theme.primary};
  background: ${(prop) => prop.theme.cardBg};
  border-radius: 0.5rem;
  text-align: center;
  width: 10rem;
  height: 3rem;
  padding-top:1.5rem;
  margin-right: 3rem;
  text-decoration: none;
  font-weight: 600;
`;
export const MyOrderContainer = styled.div`
  width: 60%;
  height: 20rem;
  margin: 5rem 0rem 2rem 0rem;
  background: ${(prop) => prop.theme.cardBg};
`;
export const Box1 = styled.div`
  border-bottom: 1px solid ${(prop) => prop.theme.primary};
  display: flex;
  flex-direction: row;
  height: 4rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  @media (min-width: 500px) and (max-width: 768px) {
    font-size: 14px;
    height: 5rem;
  }
  @media (min-width: 0px) and (max-width: 530px) {
    font-size: 10px;
    height: 6rem;
  }
`;

export const Box2 = styled.div`
  /* border: 2px solid yellow; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 15rem;
  place-items: center;
  img {
    width: 90%;
    height: 90%;
  }
`;
export const Name = styled.div`
  /* border: 2px solid black; */
  margin-right: 2rem;
`;
export const Price = styled.div`
  /* border: 2px solid green; */
`;
export const Order = styled.div`
  margin-left: 2rem;
`;
export const ImageContainer = styled.div`
  height: 13rem;
  width: 80%;
  grid-column: 1/2;
  grid-row: 1/3;
`;
export const DescriptionContainer = styled.div`
  grid-column: 2/3;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50%;
`;

export const ReapetOrder = styled.div``;
