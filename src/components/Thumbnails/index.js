import {Component} from 'react'
import VideosInfo from '../../context/VideosInfo.js'
import {formatDistanceToNow} from 'date-fns'
import {
  ThumbItem,
  ThumbImage,
  Thumbbottom,
  ThumbBotIm,
  ThumbCont,
  ThumbPara,
  Thumbdesp,
  Thumbviews,
  Linking,
} from './styledComponents.js'

class Thumbnails extends Component {
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
            <ThumbItem>
              <Linking to={`/videos/${id}`}>
                <ThumbImage alt="video thumbnail" src={thumbnailUrl} />
                <Thumbbottom>
                  <ThumbBotIm alt="channel logo" src={profileImageUrl} />
                  <ThumbCont>
                    <ThumbPara mode={isDarkMode}>{title}</ThumbPara>
                    <Thumbdesp mode={isDarkMode}>{name}</Thumbdesp>
                    <Thumbviews mode={isDarkMode} >
                      {viewCount} views <span>&#183;</span> {years} years ago
                    </Thumbviews>
                  </ThumbCont>
                </Thumbbottom>
              </Linking>
            </ThumbItem>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default Thumbnails
