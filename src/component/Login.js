import React from 'react'

class Login extends React.Component{
    state = {
        username: '',
        password: ''
    }

    handleUsernameChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onLoginSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.error){
                alert(data.message)
            } else {
                localStorage.setItem('jwt', data.token)
                this.props.updateUser(data.user_data)
            }
        })
    }


    render(){
        // debugger
        return(
            <form onSubmit={this.onLoginSubmit}>
                <label>Username: </label>
                <br/>
                <input type='text' name='username' value={this.state.username} onChange={this.handleUsernameChange}></input>
                <br/>
                <label>Password: </label>
                <br/>
                <input type='password' name='password' value={this.state.password} onChange={this.handleUsernameChange}></input>
                <br/>
                <br/>
                <input type='submit' value='Login'/>
            </form>
        )
    }

}

export default Login