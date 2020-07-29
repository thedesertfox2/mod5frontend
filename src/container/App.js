import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Container from './Container'
import {Switch, Route, Redirect} from 'react-router-dom'
import Maneuvers from '../component/Maneuvers'
import Homepage from '../component/Homepage'
import Login from '../component/Login'
import Paperwork from '../component/Paperwork'
import Quiz from '../component/Quiz'
import Timer from '../component/DrivingLog'
import Profile from '../component/Profile'
import Navbar from '../component/Navbar'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      user: null,
      
      questions: [],
      myPaperworks: []
    }
  }

  componentDidMount(){
    // this.fetchAllPaperwork()
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

  updateMyPaperworks = (paperwork) => {
    this.setState({
      myPaperworks: paperwork
    })
  }

  currentUser = (user) => {
    console.log(user)
    this.setState({user: user, myPaperworks: user.dmv_paperworks})
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
        <div classname='App'>
          <Switch>

            <Route path='/maneuvers' render={() => 
              this.state.user ? <Container component={Maneuvers}/> : <Redirect to='login'/>
            } />

            <Route path='/home' render={() => 
              this.state.user ? <Container component={Homepage} currentUser={this.state.user}/> : <Redirect to='login'/>
            } />

            <Route path='/paperwork' render={() => 
              this.state.user ? <Container component={Paperwork} myPaperworks={this.state.myPaperworks} currentUser={this.state.user} updateMyPaperworks={this.updateMyPaperworks}/> : <Redirect to='login'/>
            } />

            <Route path='/practice_test' render={() => 
              this.state.user ? <Container component={Quiz} currentUser={this.state.user}/> : <Redirect to='login'/>
            } />

            <Route path='/my_hours' render={() => 
              this.state.user ? <Container component={Timer} currentUser={this.state.user}/> : <Redirect to='login'/>
            } />

            <Route path='/profile' render={() => 
              this.state.user ? <Container component={Profile} currentUser={this.state.user} updateUser={this.currentUser}/> : <Redirect to='login'/>
            } />

            <Route path='/login' render={() => 
              this.state.user ? <Redirect to='/home'/> : <Container component={Login} updateUser={this.currentUser}/>
            } />

          </Switch>
        </div>
         
      </div>
    );
  }
 
}

export default App;
