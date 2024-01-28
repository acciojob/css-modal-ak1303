var modal = document.querySelector('.modal');
var btn = document.getElementById('openModal');

function openModal() {
    modal.classList.add('open');
    document.body.style.backgroundColor = 'lightgrey';
    window.addEventListener("click", closeIfClickedOutside);
}

function closeModal() {
    document.body.style.backgroundColor = 'white';
    modal.classList.remove('open');
    window.removeEventListener("click", closeIfClickedOutside);
}

function closeIfClickedOutside(event) {
    if (!modal.contains(event.target) && event.target !== btn) {
        closeModal();
    }
}
