import React from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';

class GameForm extends React.Component {

  state = {
    player_name: "",
    factor: 5,
    problem_number: "", 
  }

  handleUpdateSetting = (event) => {
    const { name, value } = event.target;

    this.setState(previousState => ({
        ...previousState,
        [name]: value
    }));
  };

  startNewGame = () =>  {
    this.props.startGame(this.state);
  }
  
  formValid = () => {
      const {player_name, factor, problem_number} = this.state;
      //TODO Find a better way to validate
      return player_name !== "" && 
            factor !== "" &&
            factor >= 1 &&
            factor <= 10 &&
            problem_number !== "" &&
            problem_number >= 1 &&
            problem_number <= 10;
  };

  render() {
        
    return (

      <Form>
        <Form.Group>
          <Form.Label>Player Name</Form.Label>
          <Form.Control 
            name="player_name"
            type="text" 
            placeholder="Player Name" 
            value={this.state.player_name} 
            onChange={this.handleUpdateSetting}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Factor</Form.Label>
          <Form.Control 
            name="factor"
            type="number" 
            min="1" 
            max="10"
            placeholder="Factor" 
            value={this.state.factor} 
            onChange={this.handleUpdateSetting}
            required
          />
        </Form.Group>        
        <Form.Group>
          <Form.Label>Number of Problems</Form.Label>
          <Form.Control 
            name="problem_number"
            type="number" 
            min="1" 
            max="10"
            placeholder="Number of Problems" 
            value={this.state.problem_number}
            onChange={this.handleUpdateSetting}
            required
          />
        </Form.Group> 
        <Form.Group>
          <ButtonGroup>
              <Button 
                variant="secondary"
                onClick={this.startNewGame}
                disabled={!this.formValid()}
              >Start Game</Button>
          </ButtonGroup>
        </Form.Group>
      </Form>
    );
  }
}

export default GameForm;
