//* gestion de l'animation au click du bouton 

const startBtnElt = document.getElementById('start');
const stopBtnElt = document.getElementById('stop');
const divElt = document.querySelector('.animation');
let timeoutId
startBtnElt.addEventListener('click', function () {
    const className = document.querySelector('select').value;
    divElt.classList.remove('animation-on', 'animation-3-7', 'animation-4-6', 'animation-5-5', 'animation-6-4');
    divElt.classList.add(className);
    //* gestion de la durée et de l'animation
    clearTimeout(timeoutId)
    timeoutId = setTimeout(function () {
        divElt.classList.remove('animation-on', 'animation-3-7', 'animation-4-6', 'animation-5-5', 'animation-6-4');
    }, inputSlide.value * 60000)
});
stopBtnElt.addEventListener('click', function () {
    divElt.classList.remove('animation-on', 'animation-3-7', 'animation-4-6', 'animation-5-5', 'animation-6-4');
});

//*gesttion input slide et boxe

const inputSlide = document.querySelector('input[name=duration]');
const inputBoxe = document.querySelector('input[name=duration-number]');

inputSlide.addEventListener('input', function () {
    inputBoxe.value = inputSlide.value;
    inputBoxe.setAttribute('aria-valuenow', inputSlide.value);
});
inputBoxe.addEventListener('click', function () {
    inputSlide.value = inputBoxe.value;
    inputSlide.setAttribute('aria-valuenow', inputBoxe.value);
});
