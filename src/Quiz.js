import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';
import quizData from './quiz_data.json';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 0,
    };
  }
  showNextQuestion() {
    this.setState((state) => ({
      quiz_position: state.quiz_position + 1,
    }));
  }

  render() {
    return (
      <div>
        <QuizQuestion
          quiz_question={quizData.quiz_questions[this.state.quiz_position]}
          showNextQuestionHandler={this.showNextQuestion.bind(this)}
        />
      </div>
    );
  }
}

export default Quiz;
