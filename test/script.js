let okno = document.querySelector(".window");
let button = document.querySelector(".trigger-button");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
    okno.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === okno) {
        toggleModal();
    }
}

button.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
okno.addEventListener("click", windowOnClick);