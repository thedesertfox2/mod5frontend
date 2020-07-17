import React from 'react'

class Quiz extends React.Component{
    constructor(){
        super()
        this.state = {
            takingQuiz: false,
            option: null,
            trivia: {
                question: '',
                correct: '',
                incorrect: []
            }
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
        .then(console.log)
        } else {
            return alert('Please pick an amount of questions')
        }
    }


    render(){
        return(
            <div>
                <form onSubmit={this.submitQuestions}>
                    How many questions would you like?
                    <br/>
                    <select onChange={this.optionChange}>
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                        <option>25</option>
                        <option>50</option>
                        <option>All</option>
                    </select>
                    <input type='submit' placeholder='Submit your number request'/>
                </form>
            </div>
        )
    }
}

export default Quiz