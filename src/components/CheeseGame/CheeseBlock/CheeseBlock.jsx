import React from 'react';
import classNames from 'classnames/bind';

import styles from './CheeseBlock.module.scss';

import CHEESE_TYPE from '../CHEESE_TYPE.data';


function CheeseBlock({
  row,
  col,
  value,
}) {
  return (
    <div
      className={styles.cheese_block}
      data-row={row}
      data-col={col}
    >
      {CHEESE_TYPE[value]}
    </div>
  )
}

export default CheeseBlock;