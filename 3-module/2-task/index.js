function filterRange(arr, a, b) {
  // ваш код...
  return arr.filter(element => {
    if (element >= a && element <= b) return true;
  })
}
