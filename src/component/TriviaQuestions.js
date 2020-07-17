import React from 'react'

class TriviaQuestions extends React.Component{

    state = {
        correct: []
    }

    

    clickAnswer = (e) => {
        if (e.target.innerText === this.props.correct){
            console.log('correct')
            this.setState({
                correct: this.props.correct
            }, this.props.nextQuestion())
        } else {
            console.log('incorrect')
            this.props.nextQuestion()
        }
    }

    mixUpArr = () => {
        let fakeArr = [...this.props.choices.incorrect, this.props.choices.correct]
        let j, x, i;
        for (i = fakeArr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = fakeArr[i];
            fakeArr[i] = fakeArr[j];
            fakeArr[j] = x;
        }
        return fakeArr
    }

    render(){
        let choicesArr = this.mixUpArr()
        
        return(
            <div>
                <h1>{this.props.question}</h1>
                {choicesArr.map(c => 
                    <p onClick={this.clickAnswer}>
                        {c}
                    </p>
                )}
                
                
            </div>
        )
    }
}

export default TriviaQuestions