import React from 'react'
import ReactPlayer from 'react-player/youtube'


class Maneuvers extends React.Component {
    state = {
        renderManeuvers: false
    }

    renderManeuvers = () => {
        this.setState({
            renderManeuvers: !this.state.renderManeuvers
        })
    }

    render(){
        return(
            <div>
                {this.state.renderManeuvers ? <div onClick={this.renderManeuvers} ><h3 className='driving-log'>{this.props.maneuverObj.name}</h3><ReactPlayer url={this.props.maneuverObj.url} style={{position: 'relative', left: '420px'}}/></div> : <div onClick={this.renderManeuvers}><h3 className='driving-log'>{this.props.maneuverObj.name}</h3></div>}
            </div>
        )
    }
}

export default Maneuvers