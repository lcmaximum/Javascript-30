const pressed = [];
const secretCode = 'bizzandwich';
const secretDiv = document.getElementById('secret-div')

function easterEgg(e) {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1,(pressed.length - secretCode.length));
    console.log(pressed);
    if (pressed.join('').includes(secretCode)) {
secretDiv.innerHTML = "<h1>you win free s'barby's for a year!</h1>";
cornify_add();
    }
}

window.addEventListener('keyup',easterEgg);