import {Component} from 'react'
import Cookies from 'js-cookie'
import VideosInfo from '../../context/VideosInfo.js'
import {IoFlameSharp} from 'react-icons/io5'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideo from '../TrendingVideo'
import {
  TrendingContainer,
  TrendingMainContainer,
  LoadContainer,
  FailureContainer,
  FailureImage,
  FailureHead,
  FailurePara,
  RetryButton,
  TrendingHeading,
  TrendingLoveContainer,
  TrendingHead,
  TrendingUnorder,
  TrendingEver,
} from './styledComponents.js'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
  }
  componentDidMount() {
    this.makingRequest()
  }
  converter = obj => ({
    name: obj.name,
    profileImageUrl: obj.profile_image_url,
  })
  success = fetchedData => {
    const videosList = fetchedData.videos.map(item => ({
      id: item.id,
      title: item.title,
      thumbnailUrl: item.thumbnail_url,
      viewCount: item.view_count,
      publishedAt: item.published_at,
      channel: this.converter(item.channel),
    }))
    this.setState({
      videos: videosList,
      apiStatus: apiStatusConstants.success,
    })
  }

  makingRequest = async () => {
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
    const response = await fetch(
      ' https://apis.ccbp.in/videos/trending',
      options,
    )
    const fetchedData = await response.json()
    if (response.ok) {
      this.success(fetchedData)
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }
  tonyStark = () => {
    this.makingRequest()
  }
  renderSuccessView = isDarkMode => {
    const {videos} = this.state
    return (
      <div>
        <TrendingHeading mode={isDarkMode}>
          <TrendingLoveContainer mode={isDarkMode}>
            <IoFlameSharp />
          </TrendingLoveContainer>
          <TrendingHead mode={isDarkMode}>Trending</TrendingHead>
        </TrendingHeading>
        <TrendingEver>
          <TrendingUnorder>
            {videos.map(item => (
              <TrendingVideo key={item.id} obj={item} />
            ))}
          </TrendingUnorder>
        </TrendingEver>
      </div>
    )
  }
  //failure view
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
      /* When the HTTP GET request made in Trending Route is unsucessfull and
      the below "Retry" button is clicked, then an HTTP GET request is made to
      trendingVideosApiUrl*/
      <button type="button" onClick={this.tonyStark}>
        Retry
      </button>
    </FailureContainer>
  )
  renderLoadingView = () => (
    <LoadContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadContainer>
  )
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
              <TrendingContainer mode={isDarkMode}>
                <SideBar />
                <TrendingMainContainer mode={isDarkMode} data-testid="trending">
                  {this.parts(isDarkMode)}
                </TrendingMainContainer>
              </TrendingContainer>
            </div>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default Trending
