function getMinMax(str) {
  // ваш код...
  let result = {};
  let arrFromStr = str.split(' ');
  let numberArr = [];
  arrFromStr.forEach(element => {
    if (Number.isFinite(+element)) {
      if (Number.isInteger(+element)){
        numberArr.push(parseInt(element));
      } else {
        numberArr.push(parseFloat(element));
      }
    }
  })

  result.min = Math.min(...numberArr);
  result.max = Math.max(...numberArr);

  return result;
}

