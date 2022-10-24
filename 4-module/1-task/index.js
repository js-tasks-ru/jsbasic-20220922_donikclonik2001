function makeFriendsList(friends) {
  // ваш код...
  return friends.reduce((list, friend) => {
    list.insertAdjacentHTML('beforeend',`<li>${friend.firstName} ${friend.lastName}</li>`);
    return list;
  }, document.createElement('ul'));
}
