document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const num1 = parseFloat(document.querySelector('input[name="num1"]').value);
  