function filterRange(arr, a, b) {
  return arr.filter(element => {
    if (element >= a && element <= b) return true;
  })
}
