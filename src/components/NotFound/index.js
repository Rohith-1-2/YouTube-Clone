import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import VideosInfo from '../../context/VideosInfo.js'
import {
  TrendingContainer,
  TrendingMainContainer,
} from '../Trending/styledComponents.js'
import {
  FoundContainer,
  FoundImage,
  FoundHead,
  FoundPara,
} from '../SavedVideos/styledComponents.js'
class NotFound extends Component {
  render() {
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode} = value
          return(
            <div>
        <Header />
        <TrendingContainer>
          <SideBar />
          <TrendingMainContainer  mode={isDarkMode}>
            <FoundContainer>
              {!isDarkMode&&
                (<FoundImage
                  alt="not found"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                />)
              }
              {isDarkMode&&
                (<FoundImage
                  alt="not found"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                />)
              }
              <FoundHead  mode={isDarkMode}>Page Not Found</FoundHead>
              <FoundPara  mode={isDarkMode}>
                We are sorry, the page you requested could not be found.
              </FoundPara>
            </FoundContainer>
          </TrendingMainContainer>
        </TrendingContainer>
      </div>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default NotFound
