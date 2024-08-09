import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Linking = styled(Link)`
text-decoration: none;
color: #383838;
display: flex;
`
export const TrendItem = styled.li`
margin-bottom: 30px;
`
export const TrendImage = styled.img`
width: 30%;
margin-right: 15px;
`
export const TrendCont = styled.div`
padding-top: 0px;
`
export const TrendHead = styled.p`
font-size: 20px;
color: ${props => (props.mode ? 'white' : '#383838')};`
export const TrendPara = styled.p`
color: ${props => (props.mode ? '#cbd5e1' : '#383838')};`
