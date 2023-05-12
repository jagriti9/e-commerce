import styled from "styled-components";
export const MainContainer = styled.div`
margin:0px;
padding: 0px;
position: absolute;
width:100%;
min-height: 100%;
max-height: max-content;
display: flex;
flex-direction: row;
flex-wrap: wrap;
font-size: 18px;
font-weight: 600;
background: ${prop => prop.theme.bg};

`
export const Container = styled.div`
width:18rem;
height:22rem;
margin:3rem 0rem 0rem 4rem;
display: flex;
flex-direction: column;
justify-content: space-around;
background: ${prop => prop.theme.cardBg};
`
export const ImageContainer = styled.div`
height:15rem;
display: grid;
place-items: center;
img{
width:16rem;
    height: 13rem;
}

`
export const DetailsContainer = styled.div`
height: 5rem;
padding:10px;
display: grid;
place-items: center;
grid-template-columns:1fr 2fr 1fr;
grid-template-rows: 1fr 1fr;
`
export const DescriptionContainer = styled.div`
box-sizing: border-box;
text-overflow: ellipsis;
height: 1.8rem;
overflow: hidden;
grid-column: 1/4;
grid-row: 1;
`
export const PriceContainer = styled.div`
font-weight: 700;
margin:auto;

`
export const AddToCart = styled.button`
height:2rem;
`

export const RemoveFromWishlist = styled.button`
margin:auto;
height:2rem;

`