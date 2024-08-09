import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Linking = styled(Link)`
text-decoration: none;
color: #383838;
`

export const ThumbItem = styled.li`
width: 32%;
flex-shrink: 0;
margin-bottom: 20px;
`
export const ThumbImage = styled.img`
width: 100%;
`
export const Thumbbottom = styled.div`
display: flex;
align-items: flex-start;
`
export const ThumbBotIm = styled.img`
width: 10%;
margin-top: 15px;
`
export const ThumbCont = styled.div`
margin-left: 20px;
`
export const ThumbPara = styled.p`
font-weight: 500;
color: ${props => (props.mode ? "white" : "#383838")};
`
export const Thumbdesp = styled.p`
color: ${props => (props.mode ? '#94a3b8' : '#383838')};`
export const Thumbviews = styled.p`
font-size: 16px;
color: ${props => (props.mode ? '#94a3b8' : '#383838')};`
