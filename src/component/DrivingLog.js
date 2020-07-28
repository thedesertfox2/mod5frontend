import React from 'react'
import ReactPlayer from 'react-player/youtube'
import Maneuvers from './Maneuvers'

class DrivingLog extends React.Component {

    state = {
        maneuvers: [],
        renderManeuvers: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/parkings')
        .then(res => res.json())
        .then(data => this.setState({
            maneuvers: data
        }))
    }
    
    renderManeuvers = () => {
        this.setState({
            renderManeuvers: !this.state.renderManeuvers
        })
    } 

    render(){
        return(
            <div>
                {this.state.renderManeuvers ? <div>{this.state.maneuvers.map(man => <Maneuvers maneuverObj={man} key={man.id}/>) }<input type='button' onClick={this.renderManeuvers} value='Return to Driving Log Page'/></div>:
                <div>
                    <div>
                        <h4>Controls, Gauges, and Maintenance (at least 2hrs.) </h4>
                        <h6>Objective:</h6> <p>Student should know how to operate the pedals, switches, buttons, and other vehicle controls.</p>
                        <br/>
                    </div>

                    <div>
                        <h4>Learning the Basics (at least 2 hrs.)</h4>
                        <h6>Objective:</h6> <p>Student should be able to start, stop, drive forward, reverse, and turn vehicle.</p>
                        <br/>
                    </div>

                    <div>
                        <h4>Driving in Limited Traffic (at least 6 hrs.)</h4>
                        <h6>Objective:</h6> <p>Student should be able to drive on lightly-traveled, two lane residential streets or country roads not over 35MPH.</p>
                        <br/>
                    </div>

                    <div onClick={this.renderManeuvers}>
                        <h4>Parking (at least 2hrs.)</h4>
                        <h6>Objective:</h6> <p>Student Should be able to park in a lot with cars parked and moving around.</p>
                        <br/>
                    </div>

                    <div>
                        <h4>Driving on Limited-Access Highways (at least 6hrs.)</h4>
                        <h6>Objective:</h6> <p>Student should be able to drive during non-rush hour time.</p>
                        <br/>
                    </div>
                    
                    <div>
                        <h4>Handling the Vehicle in Traffic (at least 8hrs.)</h4>
                        <h6>Objective:</h6> <p>Student should be able to move onto routes with a mixture of neighborhood streets and commercial areas, including 4 lane roads and designated turn lanes.  Speed limit should not exceed 40MPH.</p>
                        <br/>
                    </div>

                    <div>
                        <h4>Driving at Night (at least 5hrs.)</h4>
                        <h6>Objective:</h6> <p>Student should be able to drive safely at night.</p>
                        <br/>
                    </div>

                    <div>
                        <h4>Additional Practice (at least 8hrs.)</h4>
                        <h6>Objective:</h6> <p>Student should be able to drive you on errands and trips, following directions and route themselves.</p>
                        <br/>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default DrivingLog