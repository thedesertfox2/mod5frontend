import React from 'react'

class Results extends React.Component {
    render(){
        return(
            <div>This is the results page
                <button type='click' onClick={this.props.newQuiz}>Click this to take a new Quiz!</button>
            </div>
        )
    }
}

export default Results