import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from '../component/Homepage'
import Maneuvers from '../component/Maneuvers'
import Login from '../component/Login'


class Container extends React.Component {
    render(){
        return(
            <Switch>
                <Route path='/maneuvers' render={() =>
                    <Maneuvers />
                } />
                <Route path='/home' render={() =>
                    <Homepage />
                } />

                <Route path='/login' render={() =>
                    <Login />
                } />
            </Switch>
        )
    }
}

export default Container