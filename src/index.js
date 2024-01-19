// Import our custom CSS
import '../src/scss/styles.scss';
import * as bootstrap from 'bootstrap';

function loadContent() {
    let preloader = document.getElementById('preloader');
    let main = document.getElementById('main');

    setTimeout(function () {
        preloader.style.display = 'none';
        main.style.opacity = 1;
    }, 2000);
}

const myModal = bootstrap.Modal.getOrCreateInstance('#myModal');

window.addEventListener('DOMContentLoaded', () => {
    if (window.devicePixelRatio >= 2) {
        document.querySelector('.normal-image').style.display = 'none';
        document.querySelector('.retina-image').style.display = 'inline-block';
    }

    document.addEventListener('click', (e) => {
        e.preventDefault();

        let el = e.target;
        let dataLink = el.getAttribute('data-link');

        if (dataLink !== null) {
            console.log('The ' + dataLink + ' anchor tag is clicked.');
        }
    });

    const imgBtn = document.querySelectorAll('.img-btn');
    const closeModalBtn = document.querySelectorAll('.close-modal');

    imgBtn.forEach((img) => {
        img.addEventListener('click', handleImgBtnClick);
    });

    closeModalBtn.forEach((close) => {
        close.addEventListener('click', (e) => {
            e.preventDefault();

            myModal.hide();
        });
    });

    loadContent();
});

// window.addEventListener('load', loadContent);

function handleImgBtnClick() {
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');

    modalTitle.textContent = this.getAttribute('data-title');
    modalImage.src = this.src;
    modalImage.alt = this.alt;
    myModal.show();
}
