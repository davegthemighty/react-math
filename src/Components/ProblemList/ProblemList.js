import React from 'react';
import { isEmpty } from 'lodash';

class ProblemList extends React.Component {

  render() {
    if (isEmpty(this.props.currentParams)) {
      return (<span>ccc</span>);
    }

    return (
      <span>Problem List</span>
    );
  }
}

export default ProblemList;
