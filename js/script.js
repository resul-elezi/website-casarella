'use strict';

const headerImg = document.querySelectorAll('#header img');
let index = 0;

function headerBildAustausch() {
    headerImg[index].classList.remove('active');

    index = (index + 1) % headerImg.length;

    headerImg[index].classList.add('active');
}
setInterval(headerBildAustausch, 4000);
