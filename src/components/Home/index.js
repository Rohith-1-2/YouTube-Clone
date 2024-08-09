import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import {IoMdSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import VideosInfo from '../../context/VideosInfo.js'
import {IoMdClose} from 'react-icons/io'
import Thumbnails from '../Thumbnails'
import {
  HomeContainer,
  HomeMainContainer,
  BannerContainer,
  BannerImage,
  BannerPara,
  BannerButton,
  HomeBottom,
  SearchContainer,
  SearchButton,
  SearchInput,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHead,
  FailurePara,
  FailureButton,
  HomeUnorder,
  HomeClose,
  BannerTop,
} from './styledComponents.js'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noResult: 'NORESULTFOUND',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videos: [],
    searchInput: '',
    closeBanner: false,
  }
  componentDidMount() {
    this.makingRequest()
  }
  closing = () => {
    this.setState({
      closeBanner: true,
    })
  }
  searching = e => {
    this.setState({
      searchInput: e.target.value,
    })
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
    if (videosList.length !== 0) {
      this.setState({
        videos: videosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.noResult,
      })
    }
  }
  makingRequest = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
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
  filtering = () => {
    this.makingRequest()
  }
  fatKing = () => {
    this.makingRequest()
  }
  cat = () => {
    this.makingRequest()
  }
  renderSuccessView = () => {
    const {videos} = this.state
    return (
      <HomeUnorder>
        {videos.map(item => (
          <Thumbnails key={item.id} obj={item} />
        ))}
      </HomeUnorder>
    )
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
      <FailureButton type="button" onClick={this.cat}>
        Retry
      </FailureButton>
    </FailureContainer>
  )
  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingContainer>
  )
  renderNoResultView = isDarkMode => (
    <FailureContainer>
      <FailureImage
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <FailureHead mode={isDarkMode}>No Search results found</FailureHead>
      <FailurePara mode={isDarkMode}>
        Try different key words or remove search filter
      </FailurePara>
      <FailureButton onClick={this.filtering}>Retry</FailureButton>
    </FailureContainer>
  )
  parts = isDarkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkMode)
      case apiStatusConstants.noResult:
        return this.renderNoResultView(isDarkMode)
      default:
        return null
    }
  }

  render() {
    const {closeBanner, searchInput} = this.state
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <div>
              <Header />
              <HomeContainer mode={isDarkMode}>
                <SideBar />
                <HomeMainContainer>
                  {!closeBanner && (
                    <BannerContainer data-testid="banner">
                      <BannerTop>
                        <BannerImage
                          alt="nxt watch logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        />
                        <HomeClose data-testid="close" onClick={this.closing}>
                          <IoMdClose />
                        </HomeClose>
                      </BannerTop>
                      <BannerPara>
                        Buy Nxt Watch Premium prepaid plans with
                        <br />
                        UPI
                      </BannerPara>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <HomeBottom mode={isDarkMode} data-testid="home">
                    <SearchContainer>
                      <SearchInput
                        onChange={this.searching}
                        placeholder="Search"
                        type="search"
                        value={searchInput}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.fatKing}
                      >
                        <IoMdSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.parts(isDarkMode)}
                  </HomeBottom>
                </HomeMainContainer>
              </HomeContainer>
            </div>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}

export default Home
