import React from 'react'
import TriviaQuestions from './TriviaQuestions'

class Quiz extends React.Component{
    constructor(){
        super()
        this.state = {
            takingQuiz: false,
            option: null,
            trivia: null,
            i: 0
        }
    }

    optionChange = (e) => {
        this.setState({
            option: e.target.value
            
        })
    }

    submitQuestions = (e) => {
        e.preventDefault()
        if (this.state.option !== null) {
        fetch(`http://localhost:3000/api/v1/users/${this.state.option}/quiz`)
        .then(res => res.json())
        .then(data => this.setState({trivia: data.question, takingQuiz: true}))
        
        } else {
            return alert('Please pick an amount of questions')
        }
    }

    nextQuestion = () => {
        this.setState({
            i: this.state.i += 1
        })
    }


    render(){
        return(
            <div>
                {this.state.takingQuiz 
                ?
                this.state.trivia[this.state.i].map(trivia => 
                    <TriviaQuestions question={trivia.question} choices={trivia.choices} correct={trivia.choices.correct} nextQuestion={this.nextQuestion}/>)
                :
                <form onSubmit={this.submitQuestions}>
                    How many questions would you like?
                    <br/>
                    <select onChange={this.optionChange}>
                        <option>Select an option</option>
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                        <option>25</option>
                        <option>50</option>
                        <option>All</option>
                    </select>
                    <input type='submit' placeholder='Submit your number request'/>
                </form>
                }
            </div>
        )
    }
}

export default Quiz