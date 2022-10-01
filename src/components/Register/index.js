import {Component} from 'react'

import Info from '../../context/userDetails/userdetail'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]
class Register extends Component {
  state = {na: '', verifyText: false}

  check = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {na, verifyText} = this.state
    const errorMsgContent = verifyText ? <p>Please enter your name</p> : null
    return (
      <Info.Consumer>
        {value => {
          const {updateName, updateTopic} = value

          const TupdateName = event => {
            updateName(event.target.value)
            this.setState({na: event.target.value})
          }

          const TupdateTopic = event => {
            updateTopic(event.target.value)
          }

          const verify = event => {
            event.preventDefault()
            if (na === '') {
              this.setState({verifyText: true})
            } else {
              this.check()
              this.setState({verifyText: false})
            }
          }

          return (
            <div className="registerMainContainer">
              <div className="websiteLogo">
                <img
                  className="websiteLogo"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png "
                  alt="website logo"
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </div>
              <form className="formContainer">
                <h1>Let us join</h1>
                <label htmlFor="name">Name</label>
                <input
                  onChange={TupdateName}
                  className="inp"
                  type="text"
                  id="name"
                />

                <label htmlFor="options">TOPICS</label>
                <select onChange={TupdateTopic} className="inp" id="options">
                  {topicsList.map(each => (
                    <option value={each.id} key={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
                <button
                  onClick={verify}
                  type="submit"
                  className="registerRegisterButton"
                >
                  Register Now
                </button>
                {errorMsgContent}
              </form>
            </div>
          )
        }}
      </Info.Consumer>
    )
  }
}

export default Register
