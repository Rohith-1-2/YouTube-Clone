import {Component} from 'react'
import VideosInfo from '../../context/VideosInfo.js'
import {
  SideContainer,
  SideUnorder,
  SideItem,
  Sidepara,
  Linking,
  SideBottom,
  SidebottomHead,
  SidebottomPara,
  SidebottomImages,
  SideImage,
} from './styledComponents.js'
import {Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {IoFlameSharp} from 'react-icons/io5'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

class SideBar extends Component {
  render() {
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <SideContainer mode={isDarkMode}>
              <SideUnorder>
                <SideItem>
                  <Linking mode={isDarkMode} to="/">
                    <MdHome />
                    <Sidepara>Home</Sidepara>
                  </Linking>
                </SideItem>
                <SideItem>
                  <Linking mode={isDarkMode} to="/trending">
                    <IoFlameSharp />
                    <Sidepara>Trending</Sidepara>
                  </Linking>
                </SideItem>
                <SideItem>
                  <Linking mode={isDarkMode} to="/gaming">
                    <SiYoutubegaming />
                    <Sidepara>Gaming</Sidepara>
                  </Linking>
                </SideItem>
                <SideItem>
                  <Linking mode={isDarkMode} to="/saved-videos">
                    <BiListPlus />
                    <Sidepara>Saved videos</Sidepara>
                  </Linking>
                </SideItem>
              </SideUnorder>
              <SideBottom>
                <SidebottomHead>CONTACT US</SidebottomHead>
                <SidebottomImages>
                  <SideImage
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />
                  <SideImage
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />
                  <SideImage
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  />
                </SidebottomImages>
                <SidebottomPara>
                  Enjoy! Now to see your
                  <br /> channels and
                  <br /> recommendations!
                </SidebottomPara>
              </SideBottom>
            </SideContainer>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default SideBar
