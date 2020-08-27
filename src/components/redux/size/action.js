import { sizeType } from './type';

const setBoardSize = (number) => ({
  type: sizeType.SET_BOARD_SIZE,
  payload: number,
})


export default setBoardSize;