'use strict';

const headerImg = document.getElementById('header');
const headerImgSrc = ['/img/headerbild.png', '/img/headerbild02.jpg', '/img/headerbild03.jpg', '/img/headerbild04.jpg'];

let index = 0;

function headerBildAustausch() {
    headerImg.src = headerImgSrc[index];
    index++;
    // if(index >= headerImgSrc.length) {
    //     index = 0;
    // }
    // index = index % headerImgSrc.length;
    index = index >= headerImgSrc.length ? 0 : index;
}

const headerImgIdChange = setInterval(headerBildAustausch, 4000);