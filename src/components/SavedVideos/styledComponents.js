import styled from 'styled-components'

export const SavedContainer = styled.div`
display: flex;
`
export const SavedMainContainer = styled.div`
flex-grow: 1;
background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};`

export const FoundContainer = styled.div`
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const FoundImage = styled.img`
width: 40%;
`
export const FoundHead = styled.h1`
font-size: 25px;
color: ${props => (props.mode ? 'white' : 'black')};
`
export const FoundPara = styled.p`
font-size: 16px;
color: ${props => (props.mode ? '#cbd5e1' : 'black')};
text-align: center;`

export const SavedUnorder = styled.ul`
list-style-type: none;
padding-left: 0px;
`
export const SavedEver = styled.div`
padding: 20px;`
