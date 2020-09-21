const btn = document.getElementById('mybutton')
const btn2 = document.getElementById('mybutton2')

const changeText = function () {
    btn.textContent = 'Button clicked'
};

btn.addEventListener('click', changeText);

const toggleColor = function () {
    document.body.classList.toggle("red-background")
}

btn2.addEventListener('click', toggleColor)


// note: btn.textContent = 'text hier'
// btn.innerHTML = 'text hier' werkt ook

//btn2.parentNode.classList kun je ook gebruiken om de body te krijgen. 
//Opties classList: .add, .remove, .contains