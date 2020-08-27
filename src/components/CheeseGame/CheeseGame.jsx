import React from 'react';
import { connect } from 'react-redux';

import styles from './CheeseGame.module.scss';

import CHEESE_TYPE from './CHEESE_TYPE.data';
import CheeseBaseArrayMaker from './CheeseBaseArrayMaker';
import CheeseBlock from './CheeseBlock';

class CheeseGame extends React.Component {
  constructor(props) {
    super(props);

    const { boardSize } = this.props;

    this.state = {
      grid: CheeseBaseArrayMaker(boardSize, boardSize),
    }

    this.curUser = 1;
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { boardSize } = this.props;

    if (prevProps.boardSize !== this.props.boardSize) {
      this.setState({
        grid: CheeseBaseArrayMaker(boardSize, boardSize),
      })
    }
  }

  handleSwitchUser() {
    this.curUser = this.curUser === 1 ? 2 : 1;
  }

  handleCheeseDown(event) {
    let target = event.target;
    const { grid } = this.state;

    if (!target.getAttribute("data-row")) {
      return;
    }

    let row = +target.getAttribute("data-row");
    let col = +target.getAttribute("data-col");

    if (grid[row][col] !== 0) {
      console.log('有人下过了');
      return;
    }

    let data = grid.concat();
    data[row][col] = this.curUser;

    this.handleSwitchUser();

    this.setState({
      grid: data,
    })
  }

  handleReset() {
    this.curUser = 1;
    this.setState({
      grid: CheeseBaseArrayMaker(15, 15),
    })
  }

  render() {
    let playerNext = `Next Player: ${CHEESE_TYPE[this.curUser]}`;
    const { grid } = this.state;

    return (
      <div className={styles.game_container} onClick={(event) => this.handleCheeseDown(event)}>
        <div className={styles.game_board}>
          {grid.map((row, index_i) => 
            <div key={index_i} className={styles.row}>
              {row.map((block, index_j) => {
                  let key = `${index_i}-${index_j}`;
                  return (
                    <CheeseBlock
                      key={key}
                      value={block}
                      row={index_i}
                      col={index_j}
                    />
                  );
              })}
            </div>
          )}
        </div>
        <div className={styles.score_board}>
          <p>{playerNext}</p>
          <button onClick={this.handleReset}>Restart</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ boardSize: {boardSize} }) => ({
  boardSize,
})

export default connect(mapStateToProps)(CheeseGame);