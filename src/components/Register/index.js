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
    history.push('/')
  }

  render() {
    const {na, verifyText} = this.state
    const errorMsgContent = verifyText ? <p>Enter Your Name</p> : null
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

          const verify = () => {
            if (na === '') {
              this.setState({verifyText: true})
            } else {
              this.check()
              this.setState({verifyText: false})
            }
          }

          return (
            <div className="registerMainContainer">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </div>
              <form className="formContainer">
                <h1>Lets Meet up</h1>
                <label htmlFor="name">Name</label>
                <input
                  onChange={TupdateName}
                  className="inp"
                  type="text"
                  id="name"
                />

                <label htmlFor="options">Topic</label>
                <select onChange={TupdateTopic} className="inp" id="options">
                  {topicsList.map(each => (
                    <option key={each.id}>{each.displayText}</option>
                  ))}
                </select>
                <button
                  onClick={verify}
                  type="button"
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
