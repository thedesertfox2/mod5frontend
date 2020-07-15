import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class Paperwork extends React.Component {
    state = {
        checkedOff: false
    }


    checkedItem = (e) => {
        this.setState({
            checkedOff: !this.state.checkedOff
        })
    }

    render(){
        console.log(this.props.paperWorkObj)
        return(
            <ListGroup>
                <ListGroup.Item name='item' style={this.state.checkedOff ? {color: 'green'} : {color: 'red'}}>
                    <p onClick={this.checkedItem}>{this.props.paperWorkObj.name}</p>
                    <br/>
                    <a href={this.props.paperWorkObj.url}>CS-1 information here</a>
                </ListGroup.Item>
            </ListGroup>
        )
    }
}

export default Paperwork