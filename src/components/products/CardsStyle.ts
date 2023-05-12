import styled from "styled-components";
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  margin-top: 3.5rem;
`;
export const Container = styled.div`
  background-color: rgb(205, 227, 235);
  box-sizing: border-dox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15rem;
  height: 20rem;
  margin: 1rem;
  padding: 0px 0.5rem;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 13rem;
    height: 15rem;
  }
`;
export const ImageContainer = styled.div`
  width: 15rem;
  height: 12rem;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 13rem;
    height: 10rem;
  }

  `;
export const ProductImage = styled.img`
  width: 14rem;
  height: 11rem;
  margin: 0px 0.3rem;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 13rem;
    height: 9rem;
    margin: 10px auto;
  }

`;
export const DetailsContainer = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  color: #000;
  font-weight: 600;
  padding: 0.4rem 0px;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 13rem;
    font-size: 15px;
  }

`;
export const ProductName = styled.div`
  margin: 0px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.5rem;
  white-space: nowrap;
  width: 100%;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    height:1.5rem;
  }
`;

export const ProductActions = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .action {
    margin: 0px 0.5rem;
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
  svg {
    margin-top: 3px;
  }
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;
export const ProductPrice = styled.div`
  margin: 0px 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  svg {
    margin-top: 3px;
  }
`;

export const FilterMenu = styled.div`
  position: absolute;
  margin-top: 0px;
  top: 14%;
  left: 0;
  color: rgb(82, 113, 255);
  font-weight: 600;
`;
export const Text = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  margin-top: 2rem;
`;
