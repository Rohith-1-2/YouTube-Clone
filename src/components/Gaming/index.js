import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Game from '../Game'
import Loader from 'react-loader-spinner'
import VideosInfo from '../../context/VideosInfo.js'
import {SiYoutubegaming} from 'react-icons/si'
import SideBar from '../SideBar'
import {
  GamingContainer,
  GamingMainContainer,
  LoadContainer,
  FailureContainer,
  FailureImage,
  FailureHead,
  FailurePara,
  FailureButton,
  GamingUnorder,
  GamingHeading,
  GamingLoveContainer,
  GamingHead,
  GamingEver,
} from './styledComponents.js'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }
  componentDidMount() {
    this.rendering()
  }
  clicking = () => {
    this.rendering()
  }
  success = fetchedData => {
    const videosList = fetchedData.videos.map(item => ({
      id: item.id,
      title: item.title,
      thumbnailUrl: item.thumbnail_url,
      viewCount: item.view_count,
    }))
    this.setState({
      videos: videosList,
      apiStatus: apiStatusConstants.success,
    })
  }
  rendering = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
    const fetchedData = await response.json()
    if (response.ok) {
      this.success(fetchedData)
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }
  renderFailureView = isDarkMode => (
    <FailureContainer>
      {!isDarkMode && (
        <FailureImage
          alt="failure view"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        />
      )}
      {isDarkMode && (
        <FailureImage
          alt="failure view"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        />
      )}
      <FailureHead mode={isDarkMode}>Oops! Something Went Wrong</FailureHead>
      <FailurePara mode={isDarkMode}>
        We are having some trouble to complete your request.
        <br />
        Please try again.
      </FailurePara>
      <FailureButton type="button" onClick={this.clicking}>
        Retry
      </FailureButton>
    </FailureContainer>
  )
  renderLoadingView = () => (
    <LoadContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadContainer>
  )

  renderSuccessView = isDarkMode => {
    const {videos} = this.state
    return (
      <div>
        <GamingHeading mode={isDarkMode}>
          <GamingLoveContainer mode={isDarkMode}>
            <SiYoutubegaming />
          </GamingLoveContainer>
          <GamingHead mode={isDarkMode}>Gaming</GamingHead>
        </GamingHeading>
        <GamingEver>
          <GamingUnorder>
            {videos.map(item => (
              <Game key={item.id} obj={item} />
            ))}
          </GamingUnorder>
        </GamingEver>
      </div>
    )
  }
  parts = isDarkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkMode)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkMode)
      default:
        return null
    }
  }
  render() {
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div>
              <Header />
              <GamingContainer mode={isDarkMode}>
                <SideBar />
                <GamingMainContainer mode={isDarkMode} data-testid="gaming">
                  {this.parts(isDarkMode)}
                </GamingMainContainer>
              </GamingContainer>
            </div>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default Gaming
