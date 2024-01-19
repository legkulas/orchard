// Import our custom CSS
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

function loadContent() {
    let preloader = document.getElementById('preloader');
    let main = document.getElementById('main');

    setTimeout(function () {
        preloader.style.display = 'none';
        main.style.opacity = 1;
    }, 2000);
}

window.addEventListener('load', loadContent);

import fatherAndSon from '../images/Image-01.jpg';
import fatherAndSon2x from '../images/Image-01@2x.jpg';
import vegetables from '../images/Image-02.jpg';
import vegetables2x from '../images/Image-02@2x.jpg';
import asparagus from '../images/Image-03.jpg';
import asparagus2x from '../images/Image-03@2x.jpg';
import summerLunch from '../images/Image-04.jpg';
import summerLunch2x from '../images/Image-04@2x.jpg';
import traditionalChristmas from '../images/Image-05.jpg';
import traditionalChristmas2x from '../images/Image-05@2x.jpg';
import takingTaste from '../images/Image-06.jpg';
import takingTaste2x from '../images/Image-06@2x.jpg';

// favicon
import appleTouchIcon from '../images/apple-touch-icon.png';
import favicon16 from '../images/favicon-16x16.png';
import favicon32 from '../images/favicon-32x32.png';
import favicon from '../images/favicon.ico';

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
});

function handleImgBtnClick() {
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');

    modalTitle.textContent = this.getAttribute('data-title');
    modalImage.src = this.src;
    modalImage.alt = this.alt;
    myModal.show();
}
