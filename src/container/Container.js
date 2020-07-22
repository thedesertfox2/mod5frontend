import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from '../component/Homepage'
import Maneuvers from '../component/Maneuvers'
import Login from '../component/Login'
import Paperwork from '../component/Paperwork'
import Quiz from '../component/Quiz'
import Timer from '../component/Timer'

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

                <Route path='/paperwork' render={() =>
                    this.props.paperwork.map(paperwork => 
                    <Paperwork paperWorkObj={paperwork} 
                    key={paperwork.id} 
                    currentUser={this.props.currentUser} 
                    myPaperwork={this.props.myPaperwork}
                    
                    updateMyPaper={this.props.updateMyPaper}
                    />)
                } />

                <Route path='/practice_test' render={() => 
                    <Quiz currentUser={this.props.currentUser}/>
                } />

                <Route path='/my_hours' render={() => 
                    <Timer currentUser={this.props.currentUser}/>
                } />

                <Route path='/login' render={() =>
                    <Login currentUser={this.props.currentUser}/>
                } />
            </Switch>
        )
    }
}

export default Container