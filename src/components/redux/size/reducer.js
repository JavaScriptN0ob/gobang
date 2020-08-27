import { sizeType } from './type';

const DEFAULT_BOARD_SIZE = {
  boardSize: 15,
}

const sizeReducer = (state = DEFAULT_BOARD_SIZE, action) => {
  switch (action.type) {
    case sizeType.SET_BOARD_SIZE:
      return {
        ...state,
        boardSize: action.payload,
      }
  
    default:
      return state;
  }
}

export default sizeReducer;