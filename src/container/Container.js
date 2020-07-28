import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from '../component/Homepage'
import Maneuvers from '../component/Maneuvers'
import Login from '../component/Login'
import Paperwork from '../component/Paperwork'
import Quiz from '../component/Quiz'
import Timer from '../component/Timer'
import Profile from '../component/Profile'

class Container extends React.Component {

    state = {
        dmvPaperworks: []
    }
    
    fetchAllPaperwork = () => {
        fetch('http://localhost:3000/dmv_paperworks')
        .then(res => res.json())
        .then(allPaperwork => this.setState({dmvPaperworks: allPaperwork}))
    }

    componentDidMount(){
        this.fetchAllPaperwork()
    }

    render(){
        // console.log(this.props.currentUser)
        return(
            <Switch>
                <Route path='/maneuvers' render={() =>
                    <Maneuvers />
                } />

                <Route path='/home' render={() =>
                    <Homepage currentUser={this.props.currentUser}/>
                } />

                <Route path='/paperwork' render={() =>
                    this.state.dmvPaperworks.map(paperwork => 
                    <Paperwork paperWorkObj={paperwork} 
                    key={paperwork.id} 
                    currentUser={this.props.currentUser} 
                    myPaperworks={this.props.myPaperworks}
                    
                    updateMyPaperworks={this.props.updateMyPaperworks}
                    />)
                } />

                <Route path='/practice_test' render={() => 
                    <Quiz currentUser={this.props.currentUser}/>
                } />

                <Route path='/my_hours' render={() => 
                    <Timer currentUser={this.props.currentUser}/>
                } />

                <Route path='/profile' render={() => 
                    <Profile currentUser={this.props.currentUser} updateUser={this.props.updateUser}/>
                } />

                <Route path='/login' render={() =>
                    <Login currentUser={this.props.currentUser}/>
                } />
            </Switch>
        )
    }
}

export default Container