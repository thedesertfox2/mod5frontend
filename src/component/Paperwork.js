import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class Paperwork extends React.Component {
    state = {
        checkedOff: false,
        myPaperwork: []
    }


    checkedItem = (e) => {
        e.persist()
        this.state.checkedOff ? this.fetchDeleteUserPaperwork(e) : this.fetchAddUserPaperwork(e)
    }

    fetchAddUserPaperwork = (e) => {
        e.preventDefault()
        console.log('adding')
        fetch(`http://localhost:3000/user_dmv_paperworks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'user_id': this.props.currentUser.id,
                'dmv_paperwork_id': parseFloat(e.target.id)
            })
        })
        .then(res => res.json ())
        .then(data => {
            console.log(data)
            this.setState({
                checkedOff: true,
                myPaperwork: [...this.state.myPaperwork, data]
            })
        
        })
    }

    fetchDeleteUserPaperwork = (e) => {
        e.preventDefault()
        console.log('deleting')
        let deleteMe = this.state.myPaperwork.filter(pw => pw.user_id === this.props.currentUser.id && pw.dmv_paperwork_id === parseInt(e.target.id))
        // debugger
        fetch(`http://localhost:3000/user_dmv_paperworks/${deleteMe[0].id}`, {
            method: 'DELETE'
        })
        .then(data => {
            if (this.state.myPaperwork.length === 0) {
                this.setState({
                checkedOff: false,
                myPaperwork: []
            })
            } else {
                this.setState({
                    checkedOff: false,
                    myPaperwork: this.state.myPaperwork.filter(pw => pw.id !== deleteMe[0].id)
                })
            }
        })
            
            
        
    } 

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/paperworks`)
        .then(res => res.json())
        .then(data => {
            if(data === null){
                this.setState({
                    checkedOff: false
                })
            } else {
                this.setState({
                    checkedOff: true,
                    myPaperwork: [data]
                })
            }
        })
    }

    render(){
        return(
            <div>
                <ListGroup>
                    <ListGroup.Item name='item'  style={this.state.checkedOff ? {color: 'green'} : {color: 'red'}}>
                        <p onClick={this.checkedItem} id={this.props.paperWorkObj.id} >{this.props.paperWorkObj.name}</p>
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