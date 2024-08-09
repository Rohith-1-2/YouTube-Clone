import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Linking = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
color: ${props => (props.mode ? '#ebebeb' : 'black')};
padding-left: 20px;
`

export const SideContainer = styled.div`
width: 18%;
flex-shrink: 0;
height: 640px;
display: flex;
flex-direction: column;
justify-content: space-between;
color: ${props => (props.mode ? '#ebebeb' : 'black')};
background-color: ${props => (props.mode ? '#313131' : 'white')};
`
export const SideUnorder = styled.ul`
list-style-type: none;
padding-left: 0px;
`
export const SideItem = styled.li``
export const Sidepara = styled.p`
margin-left: 15px;
font-weight: 480;
font-size: 15px;
`
export const SideBottom = styled.div`
padding-left: 15px;
`
export const SidebottomHead = styled.p`
font-size: 15px;
`
export const SidebottomPara = styled.p`
font-size: 12px;
font-weight: 500;
`
export const SidebottomImages = styled.div``
export const SideImage = styled.img`
width: 8%;
margin-right: 8px;
`
