import styled from 'styled-components'

export const GamingContainer = styled.div`
display: flex;
background-color: ${props => (props.mode ? '#313131' : 'white')};
`
export const GamingMainContainer = styled.div`
flex-grow: 1;
background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
`
export const LoadContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 600px;`

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
font-size: 25px;
color: ${props => (props.mode ? 'white' : 'black')};
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
export const GamingUnorder = styled.ul`
list-style-type: none;
padding-left: 0px;
display: flex;
padding: 10px;
justify-content: space-between;
flex-wrap: wrap;
`
export const GamingEver = styled.div`
padding: 20px;`

export const GamingHeading = styled.div`
display: flex;
align-items: center;
color:  #313131;
background-color: ${props => (props.mode ? '#231f20' : 'white')};
`

export const GamingLoveContainer = styled.div`
background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
width: 60px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
border-radius: 50px;
margin-right: 20px;
margin-left: 30px;
color: #ff0b37;
`
export const GamingHead = styled.h1`
color: ${props => (props.mode ? 'white' : 'black')};
`
