import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  margin-top:6rem;
  color:#4169e1;
`;
export const DetailsContainer = styled.div`
  border: 5px solid rgb(172, 199, 221);
  border-radius: 2rem;
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 1rem;
  button {
    align-items: center;
    margin: 1rem 0rem 1rem 4rem;
  }
  h3{
    text-align: center;
  }
`;
export const InputWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
box-sizing:border-box;
padding-left:3rem;
font-size: 18px;
p{
    color:red;
    margin:0px;
    font-size: 13px;
}
select{
  width:70%;
}
`

export const Button = styled.button`
  width: 20%;
  margin: 5% 40%;
  padding: 0.5rem;
`;
