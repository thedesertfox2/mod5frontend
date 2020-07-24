import React from 'react'

class Choices extends React.Component {
    // static activeSiblings = [];

    state = {
        choice: '', 
        color: 'white'
    }

    // componentWillMount() {
    //     Choices.activeSiblings.push(this);
    // }

    // componentWillUnmount() {
    //     Choices.activeSiblings.splice(Choices.activeSiblings.indexOf(this), 1);
    // }

    // colorWhenAnswered = (e) => {
    //     e.persist()
    //     Choices.activeSiblings.forEach((sibling) => {
    //         if (sibling.props.correct) {
    //             sibling.props.clickAnswer(e)
    //         }
    //     });
    // }

    renderAnswer = (e) => {
        e.persist()
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
    }}

    renderNewQuestion = (e) => {
        e.persist()
        this.setState({
            color: 'white',
            choice: ''
        }, this.props.clickAnswer(e))
    }

    render() {
        return(
            <div>
                <p onClick={this.props.showAnswer ? (e) => this.renderNewQuestion(e) : (e) => this.renderAnswer(e)} value={this.props.choiceObj} style={{background: this.state.color}}>{this.props.choiceObj}</p>
            </div>
        )
    }
}

export default Choices