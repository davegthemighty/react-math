import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';

class GameForm extends React.Component {

  render() {
    return (

      <Form>
        <Form.Group>
          <Form.Label>Player Name</Form.Label>
          <Form.Control 
            name="player_name"
            type="text" 
            placeholder="Player Name" 
            value={this.props.newParams.player_name} 
            onChange={this.props.updateNew}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Factor</Form.Label>
          <Form.Control 
            name="factor"
            type="number" 
            placeholder="Factor" 
            value={this.props.newParams.factor} 
            onChange={this.props.updateNew}
            required
          />
        </Form.Group>        
        <Form.Group>
          <Form.Label>Number of Problems</Form.Label>
          <Form.Control 
            name="problem_number"
            type="number" 
            placeholder="Number of Problems" 
            value={this.props.newParams.problem_number}
            onChange={this.props.updateNew}
            required
          />
        </Form.Group> 
        <Form.Group>
          <ButtonGroup aria-label="Basic example">
              <Button 
                variant="secondary"
                onClick={this.props.startGame}
              >Start Game</Button>
              <Button variant="secondary">Calculate Score</Button>
          </ButtonGroup>
        </Form.Group>
      </Form>
    );
  }
}

export default GameForm;
