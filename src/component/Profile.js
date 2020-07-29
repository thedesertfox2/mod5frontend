import React from 'react'
import Form from 'react-bootstrap/Form'
class Profile extends React.Component{

    state = {
        age: 0,
        checkedOff: false
    }

    calculateAge = () => {
        let today = new Date();
        let birthDate = new Date(this.props.currentUser.dob);
        let ageNow = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
            this.setState({
                age: ageNow--
            })
        } 
        
        
        this.setState({
            age: ageNow
        })
    }

    checkedOff = (e) => {
        fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'appliction/json'
            },
            body: JSON.stringify({
                'has_permit': !this.state.checkedOff
            })
        })
        .then(res => res.json())
        .then(data => this.setState({
            checkedOff: !this.state.checkedOff
        }, this.props.updateUser(data)))
    }

    

    componentDidMount(){
        this.calculateAge()
        this.setState({
            checkedOff: this.props.currentUser.has_permit
        })
    }

    render(){
        return(
            <div style={{position: 'relative', left: '5px'}}>
                Your Name: {this.props.currentUser.name}
                <br/>
                Your Birthday: {this.state.age}
                <br/>
                <Form>
                    <Form.Check type='checkbox' id={`check-api-checkbox`} isValid>
                        <Form.Check.Input type='checkbox' checked={this.state.checkedOff ? 'checked' : null}  onClick={this.checkedOff}/>
                        <Form.Check.Label>Have you obtained your permit?</Form.Check.Label>
                        <Form.Control.Feedback type="valid"> </Form.Control.Feedback>
                        
                    </Form.Check>
                </Form>

                
            </div>
        )
    }
    
} 

export default Profile