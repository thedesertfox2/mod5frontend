import React from 'react'
import ReactPlayer from 'react-player/youtube'

class DrivingLog extends React.Component {

    state = {
        maneuvers: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/parkings')
        .then(res => res.json())
        .then(data => this.setState({
            maneuvers: data
        }))
    }

    render(){
        return(
            <div>
                {this.state.maneuvers.map(man => 
                    <div>
                        <h4>{man.name}</h4>
                        <ReactPlayer url={man.url} />
                    </div>
                )}
            </div>
        )
    }
}

export default DrivingLog