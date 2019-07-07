import React from 'react';
import './App.css';
import Title from './components/Title';
import Question from './components/Question';
import Answer from './components/Answer';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Wrong from './components/Wrong';
import Correct from './components/Correct';




class App extends React.Component {

  state = {
    question: '',
    correct_answer: '',
    answers: [],
    list: [],
    category: '',
    toggle: true,
    score: 0,
    isWrongSwitchOn: false,
    isCorrectSwitchOn: false,
    isAnswerOn: false,
    isQuestionOn: false
  }

  getTrivia = async (event) => {
    event.preventDefault();
    // const api_key = process.env.REACT_APP_API_KEY
    const api_call = await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      question: data.results[0].question.replace(/&quot;/g, '"').replace(/&#039;/g, `'`).replace(/&amp;/g, '&'),
      correct_answer: data.results[0].correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, `'`).replace(/&amp;/g, '&'),
      category: data.results[0].category,
      answers: data.results[0].incorrect_answers,
      toggle: true,
      list: [data.results[0].incorrect_answers[0], data.results[0].incorrect_answers[1],data.results[0].incorrect_answers[2], data.results[0].correct_answer],
      isQuestionOn: !this.state.isQuestionOn
    })
    setTimeout(() => {
      this.setState({
        isQuestionOn: !this.state.isQuestionOn
      })
    }, 350)
  }

  handleAnswer = () => {
    this.setState({
      toggle: !this.state.toggle,
      isAnswerOn: !this.state.isAnswerOn
    })
    setTimeout(() => {
      this.setState({
        isAnswerOn: !this.state.isAnswerOn
      })
    }, 350)
  }

  handleWrong = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        score: prevState.score - 1,
        isWrongSwitchOn: !this.state.isWrongSwitchOn
      }
    })
    setTimeout(() => {
      this.setState({
        isWrongSwitchOn: !this.state.isWrongSwitchOn
      })
    }, 350)
  }

  handleCorrect = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        score: prevState.score + 1,
        isCorrectSwitchOn: !this.state.isCorrectSwitchOn
      }
    })
    setTimeout(() => {
      this.setState({
        isCorrectSwitchOn: !this.state.isCorrectSwitchOn
      })
    }, 350)
  }


  render() {
    return (
      <div>
        <div className="container">
          <Title className="Header" />
          <Question
            className={this.state.isQuestionOn ? "Trivia-Button" : "Trivia-Button-Off"}
            onClick={this.getTrivia}
            />
          <Answer
            className={this.state.isAnswerOn ? "Answer-Button" : "Answer-Button-Off"}
            onClick={this.handleAnswer}
          />
          <Menu
            className="Menu"
            category={this.state.category}
          />
          <Content
            className='Content'
            question={this.state.question}
            correct_answer={this.state.correct_answer}
            toggle={this.state.toggle}
            answers={this.state.answers}
            list={this.state.list}
          />
          <Footer
            className="Footer"
            score={this.state.score}
          />
          <Wrong
            className={this.state.isWrongSwitchOn ? "Wrong" : "Wrong-off"}
            onClick={this.handleWrong}
          />
          <Correct
            className={this.state.isCorrectSwitchOn ? "Correct" : "Correct-off"}
            onClick={this.handleCorrect}
          />
        </div>
      </div>
    );
  }
}

export default App;

// <h1>Trivia App</h1>
// <button
//   onClick={this.getTrivia}
// >Click me for trivia
// </button>
// <div className="jeopardy-box">
//     {this.state.question && <h2 className="question">{this.state.question}</h2> }
//     {this.state.hidden === 'hide' && this.state.question && <button onClick={this.hideIt}>Show me the answer</button>}
//     {this.state.hidden === 'seen' && <button onClick={this.hideIt}>Hide the answer</button>}
// </div>
// {this.state.answer && <h1 className={this.state.hidden}>{this.state.answer}</h1> }
