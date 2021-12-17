const slider = document.querySelector(".slider input");
const img2 = document.querySelector(".images .img-2");
const img1 = document.querySelector(".images .img-1");
const dragLine = document.querySelector(".slider .drag-line");
const input = document.querySelector('#input');
const addBtn = document.querySelector('button');
const loader = document.querySelector('.loader');
const container = document.querySelector('.wrapper');

const linkImage = JSON.parse(localStorage.getItem('linkImage'));

slider.oninput = () => {
    let sliderVal = slider.value;
    dragLine.style.left = sliderVal + "%";
    img2.style.width = sliderVal + "%";
}

const showLoader = () => {
    loader.hidden = false;
    container.hidden = true;
}

const hideLoader = () => {
    loader.hidden = true;
    container.hidden = false;
}

const defaultImg = () => {
    if (linkImage) {
        img1.setAttribute('style', `background: url("${linkImage}") no-repeat`);
        img2.setAttribute('style', `background: url("${linkImage}") no-repeat`);
    } else {
        img1.setAttribute('style', `background: url("./img.jpg") no-repeat`);
        img2.setAttribute('style', `background: url("./img.jpg") no-repeat`);
    }
}

const changeImg = () => {
    showLoader();
    const inputValue = input.value;
    localStorage.setItem('linkImage', JSON.stringify(inputValue));
    const linkImage1 = JSON.parse(localStorage.getItem('linkImage'));

    setTimeout(() => {
        img1.setAttribute('style', `background: url("${linkImage1}") no-repeat`);
        img2.setAttribute('style', `background: url("${linkImage1}") no-repeat`);
        hideLoader();
        input.value = '';
    }, 500);
}

addBtn.addEventListener('click', changeImg);
window.addEventListener('keypress', e => {
    if (e.code == 'Enter') {
        changeImg();
    }
})

defaultImg();