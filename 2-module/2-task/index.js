function isEmpty(obj) {
  // ваш код...
  let arr = Object.keys(obj);
  if (arr.length < 1) {
    return true;
  } else return false;
}
