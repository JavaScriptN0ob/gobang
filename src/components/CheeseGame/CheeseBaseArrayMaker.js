function CheeseBaseArrayMaker(row, col) {
  let CheeseBaseData = [],
    rowData = [];

  for (let i = 0; i < col; i++) {
    rowData.push(0);
  }
  for (let i = 0; i < row; i++) {
    CheeseBaseData.push(rowData.concat());
  }

  return CheeseBaseData;
}

export default CheeseBaseArrayMaker;