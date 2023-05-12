import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  overflow: hidden;
  height: max-content;
  background-color: ${props => props.theme.bg};
  color:#fff;
`;
export const UserNav = styled.div`
  font-size: 21px;
  font-weight: 600;
  max-width: 100%;
  height: 38px;
  background: ${props => props.theme.primary};//#5271ff
  display: grid;
  grid-template-columns: 0.4fr 0.8fr 3fr;
  grid-gap: 2rem;
  @media only screen and (max-width: 767px) { 
    font-size: 21px;
  }
  
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 00px) and (max-width: 600px) {
    font-size: 17px;
  }
`;
export const Logo = styled.div`
  text-align: center;
  margin-top: 0.2rem;
  height:25px;
  cursor: pointer;
  a{
    color:#fff;
    text-decoration: none;
  }
`;

export const Search = styled.div`
  margin: 2px;
  height: 34px;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 0.5rem;
  background: #fff;
  .search-input {
    font-size: 0.8rem;
    border: none;
    outline: none;
    width: 90%;
  }
  svg {
    fill: black;
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;
export const UserMenuBar = styled.div`
  svg {
    padding-top: 0.3rem;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: #5271ff;
  }
  ul {
    display: flex;
    flex-direction: rows;
    justify-content: flex-end;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
  ul li {
    position: relative;
    list-style: none;
    margin: 0rem 1rem;
    padding: 0.2rem 1rem;
  }
  ul li:hover{
    background-color: #e8f1f4;
    color: #5271ff;
  }
  .drop-down {
    height: max-content;
    display: block;
    color: #000;
    position: absolute;
    top:100%;
    right:-100%;
    z-index:1;
  }
  .drop-down li {
    display: none;
  }
  ul li:hover .drop-down li {
    display: block;
    background-color: #5271ff;
    color: #fff;
    z-index:2;
  }
  ul li:hover .drop-down li:hover {
    background-color: rgb(232, 241, 244);
    color: #5271ff;
    border-bottom: 2px solid #5271ff;
  }
  @media only screen and (min-width: 400px) and (max-width: 600px) {
    ul li{
    padding: 0.4rem 0rem;
    }
    .drop-down{
      width:100%;
      left:-100%;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    ul li{
    padding: 0.4rem 0rem;
    }}
`;
export const DisplayCount = styled.div`
  border: 2px solid #e8f1f4;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right:0%;
  font-size: 0.6rem;
  @media only screen and (min-width: 0px) and (max-width: 600px) {
    left:100%;
    }
`;
export const ProductNav = styled.div`
  margin-top: 2px;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  height: 38px;
  background: #5271ff;
  position: absolute;
  /* display: flex; */
  ul {
    margin: 0px;
    padding: 0px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }
  ul li {
    list-style: none;
    /* margin: 0rem 2rem; */
    padding: 0.2rem 0rem;
    /* border: 2px solid red; */
  }
  ul li:hover {
    background-color: #e8f1f4;
    color: #5271ff;
    cursor: pointer;
  }
  @media only screen and (min-width: 600px) and (max-width: 768px) {
    font-size: 17px;
    box-sizing: border-box;
    padding:0.3rem 0.2rem;
  }
  @media only screen and (min-width: 470px) and (max-width: 600px) {
    font-size: 14px;
    box-sizing: border-box;
    padding:0.4rem 0.5rem;
  }
  @media only screen and (min-width: 00px) and (max-width: 470px) {
    font-size: 11px;
    box-sizing: border-box;
    padding:0.4rem 0.5rem;
  }
`;

export const FooterNav = styled.div`
  width: 100%;
  height: 150px;
  background-color: #294ef0;
  /* margin-bottom: 0rem; */
  position: relative;
  bottom: 0%;
  a{
    text-decoration: none;
    color:rgb(82, 113, 255);
    font-size: 17px;  
    font-weight: 600;
    div{
    background-color: rgb(211, 227, 240);
    text-align: center;
    padding:0.5rem;
  }
  }

  ul {
    font-size: 1.3rem;
    padding: 2rem 1rem;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
  ul li {
    list-style: none;
  }
`;

