import styled from 'styled-components'

export const HeadContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px;
padding-left: 35px;
padding-right: 35px;
background-color: ${props => (props.mode ? '#313131' : 'white')};
`

export const HeadLogo = styled.img`
width: 35%;
`

export const HeadUnorder = styled.ul`
list-style-type: none;
padding-left: 0px;
display: flex;
justify-content: space-between;
width: 190px;
`

export const HeadItem = styled.li`
text-align: center;
`

export const HeadImage = styled.img`
width: 38%;
`

export const ThemeButton = styled.button`
background-color: transparent;
border: 0px;
font-size: 26px;
color: ${props => (props.mode ? 'white' : 'black')};
`

export const LogOut = styled.button`
border: 1px solid ${props => (props.mode ? '#ebebeb' : '#3b82f6')};
background-color: transparent;
color: ${props => (props.mode ? '#ebebeb' : '#3b82f6')};
border-radius: 5px;
width: 70px;
padding: 5px;
`
export const ModalContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
padding-bottom: 30px;
`
export const ModalPara = styled.p`
font-weight: 400;
font-size: 22px;
color: ${props => (props.mode ? 'white' : 'black')};
`

export const ModalCancel = styled.button`
border: 1px solid #64748b;
color: #64748b;
background-color: transparent;
border-radius: 5px;
padding: 8px;
width: 80px;
`
export const ModalConfirm = styled.button`
background-color: #3b82f6;
border: 0px;
border-radius: 5px;
padding: 8px;
color: white;
width: 80px;
`
export const ModalMini = styled.div`
display: flex;
justify-content: space-between;
width: 45%;
`
