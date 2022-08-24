const txtareaEl = document.getElementById('txtarea');
const totalcounterEl = document.getElementById('total-counter');
const remainingcounterEl = document.getElementById('remaining-counter');

txtareaEl.addEventListener('keyup', () => {
    updateCounter();
})

updateCounter();

function updateCounter() {
    totalcounterEl.innerHTML = txtareaEl.value.length;
    remainingcounterEl.innerHTML = txtareaEl.getAttribute('maxLength')-txtareaEl.value.length;
}
