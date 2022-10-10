function sumSalary(salaries) {
  // ваш код...
  let arr = Object.values(salaries);
  return arr.reduce((sum, element) => {
    if (isFinite(element)) {
      return sum += element;
    } else return sum;
  }, 0);
}
