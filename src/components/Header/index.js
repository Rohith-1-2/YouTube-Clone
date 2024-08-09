import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import VideosInfo from '../../context/VideosInfo.js'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh} from 'react-icons/bs'
import 'reactjs-popup/dist/index.css'
import {
  HeadContainer,
  HeadLogo,
  HeadUnorder,
  HeadItem,
  HeadImage,
  ThemeButton,
  LogOut,
  ModalContainer,
  ModalPara,
  ModalCancel,
  ModalConfirm,
  ModalMini,
} from './styledComponents.js'

class Header extends Component {
  confirming = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }
  render() {
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode, modeChanging} = value
          let b
          if (isDarkMode) {
            b = 'black'
          } else {
            b = 'white'
          }
          return (
            <HeadContainer mode={isDarkMode}>
              <Link to="/">
                {!isDarkMode && (
                  <HeadLogo
                    alt="website logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  />
                )}
                {isDarkMode && (
                  <HeadLogo
                    alt="website logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  />
                )}
              </Link>
              <HeadUnorder>
                <HeadItem key="dfdf">
                  <ThemeButton
                    mode={isDarkMode}
                    onClick={modeChanging}
                    data-testid="theme"
                  >
                    {!isDarkMode && <FaMoon />}
                    {isDarkMode && <BsBrightnessHigh />}
                  </ThemeButton>
                </HeadItem>
                <HeadItem key="effd">
                  <HeadImage
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </HeadItem>
                <HeadItem key="gfgfdg">
                  <Popup
                    modal
                    trigger={<LogOut mode={isDarkMode}>Logout</LogOut>}
                    contentStyle={{
                      width: '30%',
                      borderRadius: '10px',
                      backgroundColor: b,
                    }}
                  >
                    {close => (
                      <ModalContainer>
                        <ModalPara mode={isDarkMode}>
                          Are you sure, you want to logout?
                        </ModalPara>
                        <ModalMini>
                          <ModalCancel onClick={close}>Cancel</ModalCancel>
                          <ModalConfirm onClick={this.confirming}>
                            Confirm
                          </ModalConfirm>
                        </ModalMini>
                      </ModalContainer>
                    )}
                  </Popup>
                </HeadItem>
              </HeadUnorder>
            </HeadContainer>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default withRouter(Header)
