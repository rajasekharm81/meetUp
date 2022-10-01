import {Component} from 'react'
import {Link} from 'react-router-dom'

import Info from '../../context/userDetails/userdetail'
import './index.css'

class Home extends Component {
  render() {
    return (
      <Info.Consumer>
        {value => {
          const {name, topic} = value

          const renderRegisterView = () => (
            <div className="HomeContentContainer">
              <h1>Welcome to meetup</h1>
              <p>Please select the topic</p>
              <Link to="/register">
                <button type="button" className="HomeRegisterButton">
                  Register
                </button>
              </Link>

              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          )
          const renderRegisteredView = () => (
            <div className="HomeContentContainer">
              <h1>Hi {name}</h1>
              <p>Welcome to {topic}</p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          )

          const content =
            name === '' ? renderRegisterView() : renderRegisteredView()

          return (
            <div className="HomeMinContainer">
              <div className="websiteLogo">
                <img
                  className="websiteLogo"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
                  alt="website logo"
                />
              </div>
              <div className="HomeContentMainContainer">{content}</div>
            </div>
          )
        }}
      </Info.Consumer>
    )
  }
}

export default Home
