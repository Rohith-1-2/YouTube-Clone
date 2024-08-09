import styled from 'styled-components'

export const DetailsContainer = styled.div`
display: flex;
background-color: ${props => (props.mode ? '#313131' : 'white')};
`
export const DetailsMainContainer = styled.div`
flex-grow: 1;
background-color: ${props => (props.mode ? '#0f0f0f' : '#f9f9f9')};
padding: 20px;
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
color: ${props => (props.mode ? '#cbd5e1' : 'black')};
text-align: center;
`
export const FailureButton = styled.button`
border: 0px;
background-color:  #3b82f6;
color: white;
padding: 6px;
border-radius: 5px;
width: 70px;
`
export const DetailHead = styled.p`
color: ${props => (props.mode ? 'white' : '#383838')};
font-size: 20px;
`
export const DetailPara = styled.p`
color: ${props => (props.reaction ? '#cbd5e1' : '#64748b')};
`
export const DetailLine = styled.hr``

export const Detailbottom = styled.div`
display: flex;
align-items: flex-start;
color: #383838;
`
export const DetailBotIm = styled.img`
width: 5%;
margin-top: 15px;
`
export const DetailCont = styled.div`
margin-left: 20px;
`
export const DetailPara12 = styled.p`
font-weight: 500;
color: ${props => (props.mode ? 'white' : '#383838')};`
export const DetailSub = styled.p`
color: ${props => (props.reaction ? '#cbd5e1' : '#64748b')};`
export const DetailDesp = styled.p`
font-size: 15px;
font-weight: 500;
color: ${props => (props.mode ? 'white' : '#383838')};
`
export const ViewContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const ReactionContainer = styled.div`
display: flex;
`

export const ReactionButton = styled.button`
border: 0px;
background-color: transparent;
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
color: ${props => (props.reaction ? '#2563eb' : '#64748b')};
`
