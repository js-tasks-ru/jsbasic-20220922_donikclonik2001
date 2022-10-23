function makeDiagonalRed(table) {
  // ваш код...
  const rows = Array.from(table.rows);
  rows.forEach((row, index) => {
    row.cells[index].style.backgroundColor = 'red';
  })
}
