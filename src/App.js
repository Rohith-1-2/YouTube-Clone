import './App.css'
import {Component} from 'react'
import VideosInfo from './context/VideosInfo.js'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  state = {
    savedVideosList: [],
    isDarkMode: false,
  }
  modeChanging = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }
  addVideo = video => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, video],
    }))
  }
  deleteVideo = id => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(item => item.id !== id),
    }))
  }
  render() {
    const {savedVideosList, isDarkMode} = this.state
    return (
      <VideosInfo.Provider
        value={{
          savedVideosList,
          isDarkMode,
          modeChanging: this.modeChanging,
          addVideo: this.addVideo,
          deleteVideo: this.deleteVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </VideosInfo.Provider>
    )
  }
}

export default App
