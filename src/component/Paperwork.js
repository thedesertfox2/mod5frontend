import React from 'react'

import Form from 'react-bootstrap/Form'

class Paperwork extends React.Component {
    constructor(){
        super()
        this.state = {
            checkedOff: false,
            myPapers: []
            
            
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
            this.setState({
                checkedOff: true,
                myPapers: [...this.state.myPapers, data]
            })
        
        })
    }

    fetchDeleteUserPaperwork = (e) => {
        e.preventDefault()
        console.log('deleting')
        let deleteMe = this.state.myPapers.filter(pw => pw.user_id === this.props.currentUser.id && pw.dmv_paperwork_id === this.props.paperWorkObj.id)
        // debugger
        fetch(`http://localhost:3000/user_dmv_paperworks/${deleteMe[0].id}`, {
            method: 'DELETE'
        })
        .then(data => {
            if (this.state.myPapers.length === 0) {
                this.setState({
                checkedOff: false,
                myPapers: []
            })
            } else if (this.state.myPapers.length > 0){
                this.setState({
                    checkedOff: false,
                    myPapers: this.state.myPapers.filter(pw => pw.id !== deleteMe[0].id)
                    
                })
            }
        })
            
            
        
    } 

    componentDidMount(){
        console.log('mounting')
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}/paperworks`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data === null){
                // this.setState({
                //     checkedOff: this.props.paperwork.fill(false)  
                // })
                this.setState({
                    checkedOff: false
                })

            } else {
                this.setState({
                    myPapers: data
                }, this.paperwork())
            }
        })

    }

    componentWillUnmount(){
        this.props.updateMyPaper(this.state.myPapers)
    }

    paperwork = () => {
        for(let i = 0; i < this.props.myPaperwork.length; i++){
            if (this.props.myPaperwork[i].id === this.props.paperWorkObj.id) {
                this.setState({checkedOff: true})
            }
        }
        
        
    }

    render(){
        
        return(
            <div>
                <Form>
                    <Form.Check type='checkbox' id={`check-api-checkbox`} isValid>
                        <Form.Check.Input type='checkbox' checked={this.state.checkedOff ? 'checked' : null}  onClick={this.checkedItem}/>
                        <Form.Check.Label>{this.props.paperWorkObj.name}</Form.Check.Label>
                        <br/>
                        <a href={this.props.paperWorkObj.url}>{this.props.paperWorkObj.name} URL</a>
                        <Form.Control.Feedback type="valid" href={this.props.paperWorkObj.url}>{this.props.paperWorkObj.name} Url </Form.Control.Feedback>
                    </Form.Check>
                </Form>
                
            </div>
        )
    }
}

export default Paperwork