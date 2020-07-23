import React from 'react'

class Choices extends React.Component{
    state = {
        choice: '', 
        color: 'white'
    }

    renderAnswer = (e) => {
        e.persist()
        if(this.props.showAnswer === false){
            if(e.target.innerText === this.props.correct){
                this.setState({
                    color: 'green',
                    choice: e.target.innerText
                }, this.props.clickAnswer(e))
            } else if (e.target.innerText !== this.props.correct) {
                this.setState({
                    color: 'red',
                    choice: e.target.innerText
            }, this.props.clickAnswer(e))
            }
        } else {
            this.setState({
                color: 'white',
                choice: ''
            }, this.props.clickAnswer(e))
        }
        
    }

    render(){
        console.log(this.props.correct)
        return(
            <div>
                <p onClick={this.renderAnswer} value={this.props.choiceObj} style={{background: this.state.color}}>{this.props.choiceObj}</p>
            </div>
        )
    }
}

export default Choices