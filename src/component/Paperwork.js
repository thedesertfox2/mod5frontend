import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class Paperwork extends React.Component {
    state = {
        checkedOff: null
    }


    checkedItem = (e) => {
        this.state.checkedOff ? this.fetchDeleteUserPaperwork() : this.fetchAddUserPaperwork()
    }

    fetchAddUserPaperwork = () => {
        console.log('hello')
        fetch(`http://localhost:3000/user_dmv_paperworks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'user_id': this.props.currentUser.id,
                'dmv_paperwork_id': this.props.paperWorkObj.id
            })
        })
        .then(res => res.json ())
        .then(data => this.setState({
            checkedOff: true
        }))
    }

    fetchDeleteUserPaperwork = () => {
        console.log('hello')
    } 

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/paperworks`)
        .then(res => res.json())
        .then(data => this.setState({checkedOff: true}))
        .catch(this.setState({
            checkedOff: false
        }))
    }

    render(){
        console.log(this.props.currentUser)
        return(
            <div>
                <ListGroup>
                    <ListGroup.Item name='item' value={this.props.paperWorkObj.id} style={this.state.checkedOff ? {color: 'green'} : {color: 'red'}}>
                        <p onClick={this.checkedItem}>{this.props.paperWorkObj.name}</p>
                        <br/>
                        <a href={this.props.paperWorkObj.url}>This is the {this.props.paperWorkObj.name} link</a>
                    </ListGroup.Item>
                </ListGroup>
                {/* <ProgressBar now={} label={`${now}%`} />; */}
                
            </div>
        )
    }
}

export default Paperwork