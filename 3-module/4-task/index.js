function showSalary(users, age) {
  let filtered = users.filter(user => {
    if (user.age <= age) {
      return true;
    } else return false;
  })

  return filtered.reduce((string, filteredUser, index, arr) => {
    if (index === arr.length - 1) {
      return string += `${filteredUser.name}, ${filteredUser.balance}`;
    } else return string += `${filteredUser.name}, ${filteredUser.balance}\n`;
  }, '')
}
