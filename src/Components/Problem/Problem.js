import React from 'react';
import { FormGroup as Group, FormLabel as Label, FormControl as Control } from 'react-bootstrap';

class Problem extends React.Component {

  render() {
    return (

      <Group>
        <Label>{ `${this.props.factor} x ${this.props.number} =`}</Label>
        <Control 
          name={`answer_${this.props.number}`}
          result_index={this.props.number}
          type="number" 
          value={this.props.result}
          onChange={this.props.updateAnswer}
          required
        />
      </Group> 
        
    );
  }
}

export default Problem;
