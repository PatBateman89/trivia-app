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
    answer: '',
    category: '',
    toggle: true,
    score: 0
  }

  getTrivia = async (event) => {
    event.preventDefault();
    const api_call = await fetch(`https://jservice.io/api/random`);
    const data = await api_call.json();
    console.log(data)
    this.setState({
      question: data[0].question,
      answer: data[0].answer,
      category: data[0].category.title,
      toggle: true
    })
  }

  handleAnswer = () => {
    if (this.state.toggle === true) {
      this.setState({
        toggle: false
      })
    } else {
      this.setState({
        toggle: true
      })
    }
  }

  handleWrong = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        score: prevState.score - 1
      }
    })
  }

  handleCorrect = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        score: prevState.score + 1
      }
    })
  }


  render() {
    return (
      <div>
        <div className="container">
          <Title className="Header" />
          <Question
            className="Trivia-Button"
            onClick={this.getTrivia}
            />
          <Answer
            className="Answer-Button"
            onClick={this.handleAnswer}
          />
          <Menu
            className="Menu"
            category={this.state.category}
          />
          <Content
            className='Content'
            question={this.state.question}
            answer={this.state.answer}
            toggle={this.state.toggle}
          />
          <Footer
            className="Footer"
            score={this.state.score}
          />
          <Wrong
            className="Wrong"
            onClick={this.handleWrong}
          />
          <Correct
            className="Wrong"
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
