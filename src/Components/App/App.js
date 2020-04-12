import React from 'react';
import './App.scss';
import GameForm from '../GameForm/GameForm';
import ProblemList from '../ProblemList/ProblemList';

class App extends React.Component {

  state = {
    new: {
      player_name: "",
      factor: 5,
      problem_number: undefined,
    },
    current: {},
    completed: [],
  };

  handleUpdateNew = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;

      this.setState(previousState => ({
        new: {
          ...previousState.new,
          [name]: value
        }
      }));
  };

  handleStartGame = () => {
      this.setState(previousState => ({
          current: previousState.new
      }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.title}
        </header>
        <GameForm 
            updateNew={this.handleUpdateNew}
            startGame={this.handleStartGame}
            newParams={this.state.new}
        />
        <ProblemList 
            currentParams={this.state.current} 
        />
      </div>
    );
  }
}

export default App;
