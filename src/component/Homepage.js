import React from 'react'

const Homepage = (props) => {
    return(
        <div classname='home'>
            {props.currentUser.has_permit ? <p>You are on your way to getting your license!</p> : <p>You are on your way to getting your permit!</p>}
        </div>
    )
}

export default Homepage