import styled from 'styled-components'

export const LoginContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: ${props => (props.mode ? '#313131' : 'white')};
`
export const LoginInner = styled.div`
width: 25%;
box-shadow: 0 0 10px 5px rgba(0,0,0,0.3);
padding: 30px;
background-color: ${props => (props.mode ? 'black' : 'white')};
`
export const LoginLogo = styled.div`
text-align: center;
`

export const LoginImage = styled.img`
width: 45%;
`

export const LoginForm = styled.form`
margin-top: 30px;
`

export const LoginInput = styled.div`
margin-bottom: 10px;
`

export const LoginLabel = styled.label`
color: ${props => (props.mode ? 'white' : '#7e858e')};
font-size: 11px;
margin-bottom: 3px;
`

export const LoginInEle = styled.input`
border: 2px solid #e2e8f0;
color: #7e858e;
width: 100%;
outline: none;
padding: 5px;
border-radius: 5px;
margin-top: 3px;
background-color: ${props => (props.mode ? 'black' : 'white')};
`
export const LoginCheck = styled.input``
export const CheckLabel = styled.label`
font-size: 15px;
font-weight: 400;
color: ${props => (props.mode ? 'white' : 'black')};
`

export const LoginButton = styled.button`
background-color:  #4f46e5;
width: 100%;
border-radius: 5px;
border: 0px;
color: #ffffff;
padding: 5px;
margin-top: 20px;
margin-bottom: 2px;
`
export const ErrorParagraph = styled.p`
color: red;
font-size: 10px;
margin-top:2px;
`
