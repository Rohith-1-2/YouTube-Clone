import {Component} from 'react'
import VideosInfo from '../../context/VideosInfo.js'
import {
  GameItem,
  Linking,
  GameImage,
  GameHead,
  GamePara,
} from './styledComponents.js'
class Game extends Component {
  render() {
    const {obj} = this.props
    const {id, title, thumbnailUrl, viewCount} = obj
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <GameItem>
              <Linking to={`/videos/${id}`}>
                <GameImage alt="video thumbnail" src={thumbnailUrl} />
                <GameHead mode={isDarkMode}>{title}</GameHead>
                <GamePara mode={isDarkMode}>
                  {viewCount} Watching Worldwide
                </GamePara>
              </Linking>
            </GameItem>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default Game
