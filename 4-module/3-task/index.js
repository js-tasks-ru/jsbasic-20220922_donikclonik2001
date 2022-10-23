function highlight(table) {

  /**
   * Создаем объект вида:
   * {
   *  "Name": 0,
   *  "Age": 1,
   *  "Gender": 2,
   *  "Status": 3,
   * }
   */
  const headRow = table.tHead.querySelector('tr');
  const teacherInfo = Array.from(headRow.cells).reduce((infoObj, cell, index) => {
    infoObj[cell.textContent] = index;
    return infoObj;
  }, {});
  

  const rows = Array.from(table.querySelector('tbody').rows);
  rows.forEach((row) => {
    const cells = Array.from(row.cells);
    cells.forEach((cell, index) => {
      switch(index) {

        case teacherInfo["Status"]: {
          if (cell.dataset.available) {

            if (cell.dataset.available === "true") {
              row.classList.add('available');
            } else row.classList.add('unavailable');

          } else row.hidden = "true";
          break;
        }

        case teacherInfo["Gender"]: {
          if (cell.textContent === "m") {
            row.classList.add('male');
          } else row.classList.add('female');
          break;
        }

        case teacherInfo["Age"]: {
          if (+cell.textContent < 18) row.style.textDecoration = "line-through";
        }
      }
    })
  })
}
