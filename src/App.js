import {Component} from 'react'

import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'

import Info from './context/userDetails/userdetail'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {name: '', topic: 'Arts and Culture'}

  updateName = Sname => {
    this.setState({name: Sname})
  }

  updateTopic = Stopic => {
    this.setState({topic: Stopic})
  }

  render() {
    const {name, topic} = this.state
    return (
      <BrowserRouter>
        <Info.Provider
          value={{
            name,
            topic,
            updateName: this.updateName,
            updateTopic: this.updateTopic,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/NotFound" component={NotFound} />
            <Redirect to="/NotFound" />
          </Switch>
        </Info.Provider>
      </BrowserRouter>
    )
  }
}

export default App
