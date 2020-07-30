import React from 'react'

class Results extends React.Component {

    componentDidMount(){
        
        this.makeTestResults()
    }

    makeTestResults = () => {
        fetch('http://localhost:3000/tests',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                number_of_correct: this.props.correct,
                number_of_questions: this.props.allQuestions
            })
        })
    }

    render(){
        let num = 1
        return(
            <div>

                <h1 className='results-header'>You got a {this.props.correct} out of {this.props.allQuestions}.  That equates to a score of {this.props.correct/this.props.allQuestions * 100}%!</h1>
                <br/>
                <br/>
                {this.props.trivia.map(trivia => (
                    <div className='results-answer'>
                        <h4>{num++}). {trivia[0].question}</h4>
                        <p>{trivia[0].choices.correct}</p>
                        <br/>
                    </div>
                ))}
                <button type='click' onClick={this.props.newQuiz} className='button-center'>Click this to take a new Quiz!</button>
            </div>
        )
    }
}

export default Results