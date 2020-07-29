import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import Image from '../image/noun_Driver_48705.png'



class NavBar extends React.Component{

    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link to='/home'>
                        <img src={Image} width="50" height="50" color='white'/> 
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        {!this.props.user ? 
                        <Nav>
                            <Nav.Link >
                                <Link to='/login'>
                                    <div id="navbar" >
                                        Login
                                    </div>
                                </Link> 
                            </Nav.Link>
                        </Nav>
                        
                        :

                        !this.props.user.has_permit ? 
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <Link to='/paperwork'>
                                        <div id="navbar">
                                            Your Paperwork
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link>
                                    <Link to='/practice_test'>
                                        <div id="navbar">
                                            Practice Test Questions
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to='/profile'>
                                        <div id="navbar">
                                            Profile
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to='/home'>
                                        <div id="navbar"  onClick={this.props.logout}>
                                            Logout
                                        </div>
                                    </Link> 
                                </Nav.Link>
                            </Nav>
                        :
                            <Nav className="mr-auto">
                                <Nav.Link >
                                    <Link to='/my_hours'>
                                        <div id="navbar">
                                            Driving Hours
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to='/profile'>
                                        <div id="navbar">
                                            Profile
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to='/home'>
                                        <div id="navbar"  onClick={this.props.logout}>
                                            Logout
                                        </div>
                                    </Link> 
                                </Nav.Link>
                            </Nav>
                        }
                        

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar