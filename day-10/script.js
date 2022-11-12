const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check if Shift key is down
    //check if box is already checked
lastChecked = this;
console.log(e);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));