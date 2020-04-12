import React from 'react';

class Scoreboard extends React.Component {


  //cc: 0/3 for factor 5
  render() {
    return (
      <div>
        {
          this.props.currentResults.map(
            ({player_name, factor, total_problems, correct_answers}) => 
              <div>{player_name}: {correct_answers}/{total_problems} for factor {factor}</div>
            )
        }
      </div>
    );
  }  
}

export default Scoreboard;
