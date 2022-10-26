/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.elem.insertAdjacentHTML('afterbegin', `
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody></tbody>`);

    rows.forEach(row => {
      this.elem.querySelector('tbody').append(this.createRow(row));
    })
  }

  createRow(row) {
    let tr = document.createElement('tr');

    for (let value of Object.values(row)) {
      let td = document.createElement('td');
      td.textContent = value;
      tr.append(td);
    }

    let td = document.createElement('td');

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.addEventListener('click', function() {
      btn.closest('tr').remove();
    })
    
    td.append(btn);
    tr.append(td);
    return tr;
  }
}


