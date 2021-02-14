// Script.js
window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if (localStorage.getItem('fetchedArr') === null) {
   
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        localStorage.setItem('fetchedArr', JSON.stringify(data))
     })
  }
});
