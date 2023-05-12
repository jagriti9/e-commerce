import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height: 100%;
display:grid;
place-items:center;
color:#4169e1;
padding-top:60px;
`
export const FormContainer = styled.form`
border:2px solid #dcdcdc;
border-radius:1rem;
display:flex;
flex-direction:column;
align-items:center;
width:400px;
height:500px;
padding:20px;
`
export const InputWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
box-sizing:border-box;
padding-left:5rem;
p{
    color:red;
    margin:0px;
}
`
export const FormInput = styled.input`
width:70%;
height:10%;
margin-top:0.5rem;
border-radius:0.3rem;
outline:none;
`
export const Button = styled.button`
width:72%;
height:10%;
margin-top:3rem;
background-color:#5271ff;
color:#fff;
border:none;
border-radius:0.3rem;
font-size:18px;
`
export const FormFooter = styled.div`
 a{
    color:rgb(65, 105, 225);
}
`