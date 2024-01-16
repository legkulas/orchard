// Import our custom CSS
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

function loadContent() {

    let preloader = document.getElementById('preloader');
    let main = document.getElementById('main');

    setTimeout(function() {
        preloader.style.display = 'none';
        main.style.opacity = 1;
    }, 2000);

}

window.addEventListener('load', loadContent);

import fatherAndSonSrc1 from '../images/Image-01.jpg';
import fatherAndSonSrc1x from '../images/Image-01@2x.jpg'
import fatherAndSonSrc2 from '../images/Image-02.jpg';
import fatherAndSonSrc2x from '../images/Image-02@2x.jpg';
import fatherAndSonSrc3 from '../images/Image-03.jpg';
import fatherAndSonSrc3x from '../images/Image-03@2x.jpg';
import fatherAndSonSrc4 from '../images/Image-04.jpg';
import fatherAndSonSrc4x from '../images/Image-04@2x.jpg'
import fatherAndSonSrc5 from '../images/Image-05.jpg';
import fatherAndSonSrc5x from '../images/Image-05@2x.jpg';
import fatherAndSonSrc6 from '../images/Image-06.jpg';
import fatherAndSonSrc6x from '../images/Image-06@2x.jpg';

// favicon
import appleTouchIcon from '../images/apple-touch-icon.png';
import favicon16 from '../images/favicon-16x16.png';
import favicon32 from '../images/favicon-32x32.png';
import favicon from '../images/favicon.ico';

const myModal = bootstrap.Modal.getOrCreateInstance('#myModal');



window.addEventListener("DOMContentLoaded", () => {   

    if (window.devicePixelRatio >= 2) {
        document.querySelector('.normal-image').style.display = 'none';
        document.querySelector('.retina-image').style.display = 'inline-block';
    }
    
    document.addEventListener('click', (e, ) => {
    
        let el = e.target;
        let dataLink = el.getAttribute('data-link');
        let dataToggle = el.getAttribute('data-toggle');
        let dataDismiss = el.getAttribute('data-dismiss');

        e.preventDefault();

        if (dataLink !== null) {
            console.log('The ' + dataLink + ' anchor tag is clicked.');
        } else if (dataToggle === 'open') {
            myModal.show();
        } else if (dataDismiss === 'modal') {
            myModal.hide();
        } else {

        }
        
    });

    // loadContent();
    
}); 



