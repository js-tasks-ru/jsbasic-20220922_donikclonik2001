function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', function() {
    if (text.hidden) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  })
}
