import {Component} from 'react'
import Cookies from 'js-cookie'
import VideosInfo from '../../context/VideosInfo.js'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  LoginInner,
  LoginLogo,
  LoginImage,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginInEle,
  LoginButton,
  LoginCheck,
  CheckLabel,
  ErrorParagraph,
} from './styledComponents.js'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    passwordType: 'password',
  }
  success = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 3})
    history.replace('/')
  }
  submitting = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const fetchedData = await response.json()
    if (response.ok) {
      this.success(fetchedData.jwt_token)
    } else {
      this.setState({
        errorMessage: '*' + fetchedData.error_msg,
      })
    }
  }
  changingUsername = e => {
    this.setState({
      username: e.target.value,
    })
  }
  changingPassword = e => {
    this.setState({
      password: e.target.value,
    })
  }
  checking = e => {
    const tick = e.target.checked
    if (tick) {
      this.setState({
        passwordType: 'text',
      })
    } else {
      this.setState({
        passwordType: 'password',
      })
    }
  }
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {errorMessage, passwordType, username, password} = this.state
    return (
      <VideosInfo.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <LoginContainer mode={isDarkMode}>
              <LoginInner mode={isDarkMode}>
                <LoginLogo>
                  {!isDarkMode && (
                    <LoginImage
                      alt="website logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    />
                  )}
                  {isDarkMode && (
                    <LoginImage
                      alt="website logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    />
                  )}
                </LoginLogo>
                <LoginForm onSubmit={this.submitting}>
                  <LoginInput>
                    <LoginLabel mode={isDarkMode} htmlFor="theONe">
                      USERNAME
                    </LoginLabel>
                    <br />
                    <LoginInEle
                      mode={isDarkMode}
                      id="theONe"
                      onChange={this.changingUsername}
                      placeholder="Username"
                      type="text"
                      value={username}
                    />
                  </LoginInput>
                  <LoginInput>
                    <LoginLabel mode={isDarkMode} htmlFor="theTwo">
                      PASSWORD
                    </LoginLabel>
                    <br />
                    <LoginInEle
                      mode={isDarkMode}
                      id="theTwo"
                      onChange={this.changingPassword}
                      placeholder="Password"
                      type={passwordType}
                      value={password}
                    />
                  </LoginInput>
                  <LoginCheck
                    id="theThree"
                    onClick={this.checking}
                    type="checkbox"
                  />
                  <CheckLabel mode={isDarkMode} htmlFor="theThree">
                    Show Password
                  </CheckLabel>
                  <br />
                  <LoginButton type="submit">Login</LoginButton>
                  <ErrorParagraph>{errorMessage}</ErrorParagraph>
                </LoginForm>
              </LoginInner>
            </LoginContainer>
          )
        }}
      </VideosInfo.Consumer>
    )
  }
}
export default Login
