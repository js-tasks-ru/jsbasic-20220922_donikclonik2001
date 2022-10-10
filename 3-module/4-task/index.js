function showSalary(users, age) {
  // ваш код...
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

let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1, user2];

console.log(showSalary(users, 30));
