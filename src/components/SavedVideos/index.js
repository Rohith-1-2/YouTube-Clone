import {Component} from 'react'
import VideosInfo from '../../context/VideosInfo.js'
import Header from '../Header'
import SideBar from '../SideBar'
import {IoFlameSharp} from 'react-icons/io5'
import TrendingVideo from '../TrendingVideo'
import {
  SavedContainer,
  SavedMainContainer,
  FoundContainer,
  FoundImage,
  FoundHead,
  FoundPara,
  SavedUnorder,
  SavedEver,
} from './styledComponents.js'

import {
  TrendingHeading,
  TrendingLoveContainer,
  TrendingHead,
} from '../Trending/styledComponents.js'

class SavedVideos extends Component {
  renderSuccessView = (savedVideosList, isDarkMode) => {
    return (
      <div>
        <TrendingHeading mode={isDarkMode}>
          <TrendingLoveContainer mode={isDarkMode}>
            <IoFlameSharp />
          </TrendingLoveContainer>
          <TrendingHead mode={isDarkMode}>Saved Videos</TrendingHead>
        </TrendingHeading>
        <SavedEver>
          <SavedUnorder>
            {savedVideosList.map(item => (
              <TrendingVideo key={item.id} obj={item} />
            ))}
          </SavedUnorder>
        </SavedEver>
      </div>
    )
  }
  renderNoSavedView = isDarkMode => (
    <FoundContainer>
      <FoundImage
        alt="no saved videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
      />
      <FoundHead mode={isDarkMode}>No saved videos found</FoundHead>
      <FoundPara mode={isDarkMode}>
        You can save your videos while watching them
      </FoundPara>
    </FoundContainer>
  )
  parts = (isDarkMode, savedVideosList) => {
    if (savedVideosList.length === 0) {
      return this.renderNoSavedView(isDarkMode)
    } else {
      return this.renderSuccessView(savedVideosList, isDarkMode)
    }
  }
  render() {
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode, savedVideosList} = value
          return (
            <div>
              <Header />
              <SavedContainer>
                <SideBar />
                <SavedMainContainer mode={isDarkMode} data-testid="savedVideos">
                  {this.parts(isDarkMode, savedVideosList)}
                </SavedMainContainer>
              </SavedContainer>
            </div>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default SavedVideos
