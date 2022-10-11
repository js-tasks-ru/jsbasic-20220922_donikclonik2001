function camelize(str) {
  let arr = str.split('-');

  let result = arr.map((element, index) => {
    if (index === 0) {
      return element;
    } else {
      return element[0].toUpperCase() + element.slice(1);
    }
  })

  return result.join('');
}
