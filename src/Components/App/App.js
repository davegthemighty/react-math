import React from 'react';
import './App.scss';
import GameForm from '../GameForm/GameForm';
import Problems from '../Problems/Problems';
import Scoreboard from '../Scoreboard/Scoreboard';

class App extends React.Component {

  state = {
    current: {},
    completed: [],
  };

  handleStartGame = (data) => {

      console.log('aaa');

      this.setState(() => ({
          current: Object.assign(
            {results: Array.from({ length: data.problem_number })},
            data
          )
      }));
  };

  handleSubmitAnswers = () => {

      const {player_name, problem_number, results, factor} = this.state.current

      this.setState(({completed}) => ({
        completed: [...completed, {
          player_name: player_name,
          factor,
          total_problems: problem_number,
          correct_answers: results.filter((value, index) => 
            factor * (index + 1) === parseInt(value)
        ).length,
        }]        
      }));
  };

  handleUpdateAnswer = (event) => {

    const resultIndex = event.target.getAttribute('result_index');
    const value = event.target.value;
      
    this.setState(({current}) => {

      const { results } = current;
      results[resultIndex-1] = value;
  
      return { current: Object.assign(
        current,
        {results: results} 
      )};
    });
  } 

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          {this.props.title}
        </header>
        <GameForm 
            startGame={this.handleStartGame}
            newParams={this.state.data}
        />
        <Problems
            currentParams={this.state.current} 
            updateAnswer={this.handleUpdateAnswer}
            submitAnswers={this.handleSubmitAnswers}
        />
        <Scoreboard 
            currentResults={this.state.completed} 
        /> 
      </div>
    );
  }
}

export default App;
