import React from 'react'

const VideosInfo = React.createContext({
  savedVideosList: [],
  isDarkMode: false,
  modeChanging: () => {},
  addVideo: () => {},
  deleteVideo: () => {},
})
export default VideosInfo
