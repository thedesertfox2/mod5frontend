import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'



class NavBar extends React.Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand>
                    <Link to='/home'>
                        <div style={{color: 'white'}}>
                            Alex's Drivers Education App
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        {!this.props.user ? 
                        <Nav className="mr-auto">
                            

                            <Nav.Link >
                                <Link to='/login'>
                                    <div style={{color: 'white'}}>
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
                                        <div style={{color: 'white'}}>
                                            Your Paperwork
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link>
                                    <Link to='/practice_test'>
                                        <div style={{color: 'white'}}>
                                            Practice Test Questions
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to='/profile'>
                                        <div style={{color: 'white'}}>
                                            Profile
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to='/home'>
                                        <div style={{color: 'white'}}  onClick={this.props.logout}>
                                            Logout
                                        </div>
                                    </Link> 
                                </Nav.Link>
                            </Nav>
                        :
                            <Nav className="mr-auto">
                                <Nav.Link >
                                    <Link to='/my_hours'>
                                        <div style={{color: 'white'}}>
                                            Driving Hours
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to='/profile'>
                                        <div style={{color: 'white'}}>
                                            Profile
                                        </div>
                                    </Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to='/home'>
                                        <div style={{color: 'white'}}  onClick={this.props.logout}>
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