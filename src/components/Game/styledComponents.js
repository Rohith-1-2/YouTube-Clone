import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Linking = styled(Link)`
text-decoration: none;
color: #383838;
`
export const GameItem = styled.li`
width: 23%;
flex-shrink: 0;
margin-bottom: 30px;
`

export const GameImage = styled.img`
width: 100%;`
export const GameHead = styled.p`
font-size: 20px;
margin-top: 5px;
margin-bottom: 5px;
color: ${props => (props.mode ? 'white' : '#383838')};
`
export const GamePara = styled.p`
font-size: 13px;
margin-bottom: 5px;
color: ${props => (props.mode ? '#cbd5e1' : '#383838')};`
