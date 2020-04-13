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
      this.setState({
          current: data
      });
  };

  handleSubmitAnswers = (results) => {

      const {player_name, problem_number, factor} = this.state.current

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
