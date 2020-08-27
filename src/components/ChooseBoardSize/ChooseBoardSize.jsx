import React from 'react';
import { connect } from 'react-redux';

import setBoardSize from '../redux/size/action';

class ChooseBoardSize extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      boardSize: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      boardSize: event.target.value
    })
  }

  render() {
    const { boardSize } = this.state;
    const { dispatchSetBoardSize } = this.props;

    return (
      <React.Fragment>
        <input 
          type="number" 
          required  
          value={boardSize} 
          onChange={this.handleChange} 
        />
        <button 
          type="submit" 
          onClick={() => {dispatchSetBoardSize(boardSize)}}
        >
          确认大小
        </button>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetBoardSize: (number) => dispatch(setBoardSize(number)),
})

export default connect(null, mapDispatchToProps)(ChooseBoardSize);