import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from '../component/Navbar'
import Container from './Container'
import {Switch, Route, Redirect} from 'react-router-dom'
import Maneuvers from '../component/Maneuvers'
import Homepage from '../component/Homepage'
import Login from '../component/Login'
import Paperwork from '../component/Paperwork'
import Quiz from '../component/Quiz'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      user: null,
      paperwork: [],
      questions: []
    }
  }

  componentDidMount(){
    this.fetchAllPaperwork()
    this.fetchLoggedInUser()
  }

  fetchLoggedInUser = () => {
    if (localStorage.getItem('jwt')){
      fetch('http://localhost:3000/api/v1/token', {
        method: 'GET',
        headers: {
          'Authentication': localStorage.getItem('jwt')
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.currentUser(data)
      })
    }
  }

  fetchAllPaperwork = () => {
    fetch('http://localhost:3000/dmv_paperworks')
    .then(res => res.json())
    .then(allPaperwork => this.setState({paperwork: allPaperwork}))
  }

  currentUser = (user) => {
    console.log(user)
    this.setState({user: user})
  }

  logout = () => {
    this.setState({
      user: null
    })
    localStorage.removeItem('jwt')
  }

  render(){
    return (
      <div>
        <Navbar user={this.state.user} logout={this.logout}/>

        <Switch>

          <Route path='/maneuvers' render={() => 
            this.state.user ? <Container component={Maneuvers}/> : <Redirect to='login'/>
          } />

          <Route path='/home' render={() => 
            this.state.user ? <Container component={Homepage}/> : <Redirect to='login'/>
          } />

          <Route path='/paperwork' render={() => 
            this.state.user ? <Container component={Paperwork} paperwork={this.state.paperwork} currentUser={this.state.user}/> : <Redirect to='login'/>
          } />

          <Route path='/practice_test' render={() => 
            this.state.user ? <Container component={Quiz} currentUser={this.state.user}/> : <Redirect to='login'/>
          } />

          <Route path='/login' render={() => 
            this.state.user ? <Redirect to='/home'/> : <Container component={Login} currentUser={this.currentUser}/>
          } />

        </Switch>
         
      </div>
    );
  }
 
}

export default App;
