import React from 'react'

import Form from 'react-bootstrap/Form'

class Paperwork extends React.Component {
    constructor(){
        super()
        this.state = {
            checkedOff: false
        }
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
                'dmv_paperwork_id': this.props.paperWorkObj.id
            })
        })
        .then(res => res.json ())
        .then(data => {
            // debugger
            let arr = data.dmv_paperworks
            
            this.setState({
                checkedOff: true
            }, this.props.updateMyPaperworks(arr))
        
        })
    }

    fetchDeleteUserPaperwork = (e) => {
        e.preventDefault()
        console.log('deleting')
        // debugger
        let deleteMe = this.props.myPaperworks.filter(pw => pw.id === this.props.paperWorkObj.id)
        let dontDeleteMe = this.props.myPaperworks.filter(pw => pw.id !== this.props.paperWorkObj.id)
        // debugger
        fetch(`http://localhost:3000/user_dmv_paperworks/${deleteMe[0].id},${this.props.currentUser.id}`, {
            method: 'DELETE'
        })
        .then(data => {
                this.setState({
                checkedOff: false
            }, this.props.updateMyPaperworks(dontDeleteMe))
            
        })
            
            
        
    } 

    componentDidMount(){
        this.paperwork()
    }


    paperwork = () => {
        for(let i = 0; i < this.props.myPaperworks.length; i++){
            if (this.props.myPaperworks[i].id === this.props.paperWorkObj.id) {
                this.setState({checkedOff: true})
            }
        }
    }

    render(){
        return(
            <div className='paperwork' style={ this.state.checkedOff ? {background: '#00b300'} : {background: 'white'}} onClick={this.checkedItem}>
                {/* <Form>
                    <Form.Check type='checkbox' id={`check-api-checkbox`} isValid>
                        <Form.Check.Input style={{transform: 'scale(1.2)'}} type='checkbox' checked={this.state.checkedOff ? 'checked' : null}  />
                        <Form.Check.Label><h5>{this.props.paperWorkObj.name}</h5> {this.props.paperWorkObj.description ? <p style={{color: '#00b300'}}>({this.props.paperWorkObj.description})</p> : null}</Form.Check.Label>
                        <br/>
            
                    </Form.Check>
                </Form> */}
                <h5>{this.props.paperWorkObj.name}</h5>
                <br/>
                {this.props.paperWorkObj.description ? <p>({this.props.paperWorkObj.description})</p> : null}
            </div>
        )
    }
}

export default Paperwork