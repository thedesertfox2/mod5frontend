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
            <div>This is the results page

                You got a {this.props.correct} out of {this.props.allQuestions}.  That equates to a score of {this.props.correct/this.props.allQuestions * 100}%!

                {this.props.trivia.map(trivia => (
                    <div>
                        <h4>{num++}). {trivia[0].question}</h4>
                        <br/>
                        <p>{trivia[0].choices.correct}</p>
                    </div>
                ))}
                <button type='click' onClick={this.props.newQuiz}>Click this to take a new Quiz!</button>
            </div>
        )
    }
}

export default Results