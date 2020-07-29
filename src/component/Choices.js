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
    }

    renderNewQuestion = (e) => {
        e.persist()
    }

    renderColor = (e) => {
        e.persist()
        // debugger
        if (!this.props.showAnswer){
            if(e.target.innerText === this.props.correct){
                this.setState({
                    color: 'green',
                    choice: e.target.innerText
                }, () => this.props.clickAnswer(e))
            } else if (e.target.innerText !== this.props.correct) {
                this.setState({
                    color: 'red',
                    choice: e.target.innerText
            }, () => this.props.clickAnswer(e))
        }
        } else {
                // debugger
                this.setState({
                    color: 'white',
                    choice: ''
                }, () => this.props.clickAnswer(e))
            }
        }

    color = () => {
        // if state color is red AND this is the correct answer --> color should be green
        // if state color is red AND this is NOT the correct answer but it IS the answer you clicked on --> color should be red
        // otherwise color should be white
        if (this.props.showAnswer && this.props.correct === this.props.choiceObj) {
            return "green"
        } else if (this.props.showAnswer && this.state.choice === this.props.choiceObj) {
            return "red"
        } else {
            return "#D5D8DC"
        }

    }

    render() {
        
        
        return(
            <div>
                <p onClick={this.renderColor} value={this.props.choiceObj} style={{background: this.color(), left: '5px', position: 'relative'}}>{this.props.choiceObj}</p>
            </div>
        )
    }
}

export default Choices