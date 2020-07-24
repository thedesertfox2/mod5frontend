import React from 'react'
import Choices from './Choices'

class TriviaQuestions extends React.Component{

    state = {
        correctAnswers: [],
        showAnswer: false, 
        choices: [],
        newArr: false
    }

    

    

    clickAnswer = (e) => {
        if (this.state.showAnswer === true){
            if (this.state.correct[this.state.correct.length - 1] === this.props.correct){
                console.log('correct')
                this.setState({
                    showAnswer: false,
                    newArr: false
                }, this.props.nextQuestion(1))
            } else {
                console.log('incorrect')
                this.setState({
                    showAnswer: false,
                    newArr: false
                }, this.props.nextQuestion(0))
                
            }
        } else {
            if (e.target.innerText === this.props.correct){
                console.log('correct')
                this.setState({
                    showAnswer: true,
                    correct: [...this.state.correctAnswers, this.props.correct]
                })
            } else {
                console.log('incorrect')
                this.setState({
                    showAnswer: true
                })
            }
            
        }
    }

    mixUpArr = () => {
        if (this.state.newArr === false) {
            if (this.state.choices.length === 0){
                let fakeArr = [...this.props.choices.incorrect, this.props.choices.correct]
                let j, x, i;
                for (i = fakeArr.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = fakeArr[i];
                    fakeArr[i] = fakeArr[j];
                    fakeArr[j] = x;
                }
                
                this.setState({
                    choices: fakeArr,
                    newArr: true
                })

            } else if (this.state.choices.length > 0) {
                let fakeArr = [...this.props.choices.incorrect, this.props.choices.correct]
                let j, x, i;
                for (i = fakeArr.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = fakeArr[i];
                    fakeArr[i] = fakeArr[j];
                    fakeArr[j] = x;
                }
                
                this.setState({
                    choices: fakeArr,
                    newArr: true
                })
            }
        }

    }

    componentDidMount(){
        this.setState({
            correct: [],
            showAnswer: false
        })
    }

    render(){
        this.mixUpArr()
        return(
            <div>
                <h1>{this.props.question}</h1>
                {this.state.choices.map(c => 
                    <Choices clickAnswer={this.clickAnswer} choiceObj={c} correct={this.props.correct} showAnswer={this.state.showAnswer} newArr={this.state.newArr}/>
                )}
            </div>
        )
    }
}

export default TriviaQuestions