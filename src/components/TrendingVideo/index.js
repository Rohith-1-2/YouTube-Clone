import {Component} from 'react'
import VideosInfo from '../../context/VideosInfo.js'
import {formatDistanceToNow} from 'date-fns'
import {
  Linking,
  TrendItem,
  TrendImage,
  TrendCont,
  TrendHead,
  TrendPara,
} from './styledComponents.js'

class TrendingVideo extends Component {
  render() {
    const {obj} = this.props
    const {id, title, thumbnailUrl, viewCount, publishedAt, channel} = obj
    const {name, profileImageUrl} = channel
    const distance = formatDistanceToNow(new Date(publishedAt))
    const years = distance.split(' ')[1]
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <TrendItem>
              <Linking to={`/videos/${id}`}>
                <TrendImage alt="video thumbnail" src={thumbnailUrl} />
                <TrendCont>
                  <TrendHead mode={isDarkMode}>{title}</TrendHead>
                  <TrendPara mode={isDarkMode}>{name}</TrendPara>
                  <TrendPara mode={isDarkMode}>
                    {viewCount} views <span>&#183;</span> {years} years ago
                  </TrendPara>
                </TrendCont>
              </Linking>
            </TrendItem>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default TrendingVideo
