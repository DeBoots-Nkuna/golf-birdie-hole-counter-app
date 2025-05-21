// collecting the counter element, buttons and save element

//variables declaration
const incrementBtn = document.getElementById('btn-increment');
const saveBtn = document.getElementById('btn-save');
const counterEl = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');
let count = 0;

//function declaration

function increment() {
  count += 1;

  counterEl.textContent = count;
  console.log(count);
}

//method to save the count

function save() {
  let countStr = ' ' + count + ' - ';

  //saving the count to the save element
  saveEl.textContent += countStr;

  //resetting the count to 0
  count = 0;
  counterEl.textContent = count;
}

// method to reset count entries

function resetEntry() {
  saveEl.textContent = 'Previous Entries:';
}
