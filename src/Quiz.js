import React, { Component } from 'react';
let quizData = require('./quiz_data.json');
import QuizQuestion from './QuizQuestion.js';

class Quiz extends React.Component {
  render() {
    const quizData = require('./quiz_data.json');
    const quiz_question = quizData.quiz_questions[this.state.quiz_position - 1];
    return (
      <div className="QuizQuestion">
        <QuizQuestion quiz_question={quiz_question} />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
}
export default Quiz;
