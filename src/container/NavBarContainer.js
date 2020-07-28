import React from 'react'
import Navbar from '../component/Navbar'

class NavBarContainer extends React.Component {
    render(){
        return(
            <Navbar user={this.props.user}/>
        )
    }
}

export default NavBarContainer