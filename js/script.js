'use strict';

const headerImg = document.querySelectorAll('#header img');

let index = 0;

function headerBildAustausch() {
    headerImg[index].classList.remove('active');

    index = (index + 1) % headerImg.length;

    headerImg[index].classList.add('active');
}
setInterval(headerBildAustausch, 4000);


// function headerBildAustausch() {
//     headerImg.src = headerImgSrc[index];
//     index++;
//     // if(index >= headerImgSrc.length) {
//     //     index = 0;
//     // }
//     // index = index % headerImgSrc.length;
//     index = index >= headerImgSrc.length ? 0 : index;
// }

// const headerImgIdChange = setInterval(headerBildAustausch, 4000);