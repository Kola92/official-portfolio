const input = document.querySelectorAll('*[required]');

input.array.forEach(element => {
  if(element.value === ''){
    element.addEventListener('focus', () => {
      console.log('focused');
    });
  }
});