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


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      user: null,
      paperwork: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/dmv_paperworks')
    .then(res => res.json())
    .then(allPaperwork => this.setState({paperwork: allPaperwork}))
  }

  currentUser = (data) => {
    console.log(data)
    this.setState({user: data.user_data})
  }

  logout = () => {
    this.setState({
      user: null
    })
  }

  render(){
    return (
      <div>
        <Navbar user={this.state.user} logout={this.logout}/>

        <Switch>

          <Route path='/maneuvers' render={() => 
            <Container component={Maneuvers}/>
          } />

          <Route path='/home' render={() => 
            <Container component={Homepage}/>
          } />

          <Route path='/paperwork' render={() => 
            this.state.user ? <Container component={Paperwork} paperwork={this.state.paperwork}/> : <Redirect to='login'/>
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
