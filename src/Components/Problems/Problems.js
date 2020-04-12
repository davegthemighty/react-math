import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import Problem from '../Problem/Problem';

class Problems extends React.Component {

  render() {

    if (isEmpty(this.props.currentParams)) {
      return (<></>);
    }

    const { factor, problem_number } = this.props.currentParams;
    const items = [];

    for (let number = 1; number <= problem_number; number++) {
      items.push( <Problem key={number} number={number} factor={factor} updateAnswer={this.props.updateAnswer} />);
    } 

    return (
      <div>
        {
          items
        } 
        <ButtonGroup>
            <Button variant="secondary" onClick={this.props.submitAnswers}>Submit Answers</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Problems;
