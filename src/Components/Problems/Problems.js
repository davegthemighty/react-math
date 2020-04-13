import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import Problem from '../Problem/Problem';

class Problems extends React.Component {

  state = {
    results: []
  }

  //Check that this is the right lifecyle event to use
  componentDidUpdate(prevProps) {

    if(this.state.results.length === 0) {
      this.setState({
        results: Array.from({ length: this.props.currentParams.problem_number })
      });
    }

  }

  handleSetAnswer = (event) => {

    const resultIndex = event.target.getAttribute('result_index');
    const value = event.target.value;

    this.setState(({results}) => {

      results[resultIndex-1] = value;

      return {
        results: results
      };
    });
  }

  submitAnswers = () => {
    this.props.submitAnswers(this.state.results);
  }

  render() {

    if (isEmpty(this.props.currentParams)) {
      return (<></>);
    }

    const { factor, problem_number } = this.props.currentParams;
    const items = [];

    for (let number = 1; number <= problem_number; number++) {
      items.push( <Problem key={number} number={number} factor={factor} updateAnswer={this.handleSetAnswer} />);
    } 

    return (
      <div>
        {
          items
        } 
        <ButtonGroup>
            <Button variant="secondary" onClick={this.submitAnswers}>Submit Answers</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Problems;
