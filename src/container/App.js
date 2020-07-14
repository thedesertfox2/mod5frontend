import React from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from '../component/Navbar'
import Container from './Container'
import {Switch, Route} from 'react-router-dom'
import Maneuvers from '../component/Maneuvers'
import Homepage from '../component/Homepage'
import Login from '../component/Login'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      user: {}
    }
  }

  

  render(){
    return (
      <div>
        <Navbar />

        <Switch>
          <Route path='/maneuvers' render={() => 
            <Container component={Maneuvers}/>
          } />

          <Route path='/home' render={() => 
            <Container component={Homepage}/>
          } />

          <Route path='/login' render={() => 
            <Container component={Login}/>
          } />

        </Switch>
          
      </div>
    );
  }
 
}

export default App;
