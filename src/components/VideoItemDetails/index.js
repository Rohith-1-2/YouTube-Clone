import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideosInfo from '../../context/VideosInfo.js'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import {
  DetailsContainer,
  DetailsMainContainer,
  LoadContainer,
  FailureContainer,
  FailureImage,
  FailureHead,
  FailurePara,
  FailureButton,
  DetailHead,
  DetailPara,
  DetailLine,
  Detailbottom,
  DetailBotIm,
  DetailCont,
  DetailPara12,
  DetailSub,
  DetailDesp,
  ReactionButton,
  ViewContainer,
  ReactionContainer,
} from './styledComponents.js'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: [],
    like: false,
    dislike: false,
  }
  componentDidMount() {
    this.rendering()
  }
  pocketKnife = () => {
    this.rendering()
  }
  liking = () => {
    this.setState({
      like: true,
      dislike: false,
    })
  }
  disliking = () => {
    this.setState({
      dislike: true,
      like: false,
    })
  }
  
  converter = obj => ({
    name: obj.name,
    profileImageUrl: obj.profile_image_url,
    subscriberCount: obj.subscriber_count,
  })
  success = fetchedData => {
    const item1 = fetchedData.video_details
    const details = {
      id: item1.id,
      title: item1.title,
      videoUrl: item1.video_url,
      thumbnailUrl: item1.thumbnail_url,
      viewCount: item1.view_count,
      publishedAt: item1.published_at,
      channel: this.converter(item1.channel),
      description: item1.description,
    }
    this.setState({
      videoDetails: details,
      apiStatus: apiStatusConstants.success,
    })
  }
  rendering = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
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
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <FailureButton onClick={this.pocketKnife}>Retry</FailureButton>
    </FailureContainer>
  )
  renderLoadingView = () => (
    <LoadContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadContainer>
  )
  renderSuccessView = () => {
    const {videoDetails, like, dislike} = this.state
    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const distance = formatDistanceToNow(new Date(publishedAt))
    const years = distance.split(' ')[1]
    return (
      <VideosInfo.Consumer>
        {value => {
          const {addVideo, deleteVideo, savedVideosList, isDarkMode} = value
          const verifying = savedVideosList.findIndex(item => {
            if (item.id === id){
              return true
            }
            else{
              return false
            }
          })
          let b
          if (verifying === -1) {
            b = false
          } else {
            b = true
          }
          console.log(verifying)
          const card = () => {
            addVideo(videoDetails)
          }
          const tap = () => {
            deleteVideo(id)
          }
          return (
            <div>
              <ReactPlayer width={1210} height={500} url={videoUrl} />
              <DetailHead mode={isDarkMode}>{title}</DetailHead>
              <ViewContainer>
                <DetailPara mode={isDarkMode}>
                  {viewCount} views <span>&#183;</span> {years} years ago
                </DetailPara>
                <ReactionContainer>
                  <ReactionButton onClick={this.liking} reaction={like}>
                    <AiOutlineLike />
                    Like
                  </ReactionButton>
                  <ReactionButton onClick={this.disliking} reaction={dislike}>
                    <AiOutlineDislike />
                    Dislike
                  </ReactionButton>
                  {!b && (
                    <ReactionButton onClick={card} reaction={b}>
                      <BiListPlus />
                      Save
                    </ReactionButton>
                  )}
                  {b && (
                    <ReactionButton onClick={tap} reaction={b}>
                      <BiListPlus />
                      Saved
                    </ReactionButton>
                  )}
                </ReactionContainer>
              </ViewContainer>
              <DetailLine />
              <Detailbottom>
                <DetailBotIm alt="channel logo" src={profileImageUrl} />
                <DetailCont>
                  <DetailPara12 mode={isDarkMode}>{name}</DetailPara12>
                  <DetailSub mode={isDarkMode}>
                    {subscriberCount} subscribers
                  </DetailSub>
                  <DetailDesp mode={isDarkMode}>{description}</DetailDesp>
                </DetailCont>
              </Detailbottom>
            </div>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
  parts = isDarkMode => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
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
              <DetailsContainer mode={isDarkMode}>
                <SideBar />
                <DetailsMainContainer
                  mode={isDarkMode}
                  data-testid="videoItemDetails"
                >
                  {this.parts(isDarkMode)}
                </DetailsMainContainer>
              </DetailsContainer>
            </div>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default VideoItemDetails
