import styled from "styled-components";
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  align-items: center;
`;
export const Container = styled.div`
  background-color: rgb(205, 227, 235);
  box-sizing: border-dox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  height: 80%;
  margin: 5rem auto;
  padding: 1rem 0.5rem;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 90%;
    height: 100%;
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  width: 50%;
  height: 20rem;
  padding-bottom:1rem;

  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 70%;
    height: 12rem ;
    margin:auto;
  }
`;
export const ProductImage = styled.img`
  width: 90%;
  height: 100%;
  margin: 10px 0.3rem;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 100%;
    height: 90%;
    /* margin: 10px auto; */
  }
`;
export const DetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  color: #000;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.4rem 0px;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    width: 100%;
    font-size: 15px;
  }
`;
export const ProductName = styled.div`
  margin: 3rem auto;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.5rem;
  white-space: nowrap;
  width: 80%;
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    height: 1.5rem;
  }
`;

export const ProductActions = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  .action {
    margin: 0px 0.5rem;
    display: flex;
    width: 15rem;
    justify-content: space-around;
  }
  a button {
    padding: 7px;
  }
  svg {
    margin-top: 3px;
  }
  @media only screen and (min-width: 450px) and (max-width: 768px) {
    margin-top: 0.5rem;
  }
  @media only screen and (min-width: 0px) and (max-width: 450px) {
    button{
        font-size: 10px;

    }
  }
`;
export const ProductPrice = styled.div`
  /* margin: 0px 2rem; */
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
