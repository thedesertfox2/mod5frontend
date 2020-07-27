import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'



const NavBar = (props) => {
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
                <Nav className="mr-auto">
                
                <Nav.Link >
                    <Link to='/maneuvers'>
                        <div style={{color: 'white'}}>
                            Driving Maneuvers
                        </div>
                    </Link>
                </Nav.Link>

                <Nav.Link >
                    {props.user ?
                    <Link to='/paperwork'>
                        <div style={{color: 'white'}}>
                            Your Paperwork
                        </div>
                    </Link>
                    :
                    null
                    }
                </Nav.Link>

                <Nav.Link >
                    <Link to='/practice_test'>
                        <div style={{color: 'white'}}>
                            Practice Test Questions
                        </div>
                    </Link>
                </Nav.Link>

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
                    {
                        props.user ? 
                        <Link to='/home'>
                            <div style={{color: 'white'}} onClick={props.logout}>
                                Logout
                            </div>
                        </Link> 
                        :
                        <Link to='/login'>
                            <div style={{color: 'white'}}>
                                Login
                            </div>
                        </Link> 
                    }
                </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar