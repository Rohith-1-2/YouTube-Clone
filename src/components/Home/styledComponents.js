import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
background-color: ${props => (props.mode ? ' #313131' : 'white')};
`
export const HomeMainContainer = styled.div`
flex-grow: 1;
`
export const BannerContainer = styled.div`
background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
background-size: cover;
height: 230px;
padding: 15px;
`
export const BannerImage = styled.img`
width: 10%;
`
export const BannerPara = styled.p``
export const BannerButton = styled.button`
border: 1px solid black;
color: black;
background-color: transparent;
padding: 7px;
font-weight: 540;
`
export const HomeBottom = styled.div`
background-color: ${props => (props.mode ? '#181818' : '#f9f9f9')};
padding: 15px;
`
export const SearchContainer = styled.div`
display: flex;
`
export const SearchInput = styled.input`
outline: none;
border: 0px
flex-grow: 1;
width: 450px;
padding-left: 5px;
padding: 5px;
border: 1px solid #cccccc;
`
export const SearchButton = styled.button`
width: 50px;
padding: 5px;
font-size: 15px;
border: 1px solid #cccccc;
`
export const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 400px;
`

export const FailureContainer = styled.div`
height: 700px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const FailureImage = styled.img`
width: 28%;
`
export const FailureHead = styled.h1`
color: ${props => (props.mode ? 'white' : 'black')};
font-size: 25px;
`
export const FailurePara = styled.p`
font-size: 12px;
text-align: center;
color: ${props => (props.mode ? '#cbd5e1' : 'black')};
`
export const FailureButton = styled.button`
border: 0px;
background-color:  #3b82f6;
color: white;
padding: 6px;
border-radius: 5px;
width: 70px;
`
export const HomeUnorder = styled.ul`
list-style-type: none;
padding-left: 0px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 30px;
`
export const HomeClose = styled.button`
border: 0px;
background-color: transparent;
`
export const BannerTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
