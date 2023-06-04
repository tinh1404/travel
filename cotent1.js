const contentSlider = document.querySelector('.content__slider');
const firstImg = contentSlider.querySelectorAll('img')[0];
const arrowIcons = document.querySelectorAll('.content__location i');
let firstImgWidth = firstImg.clientWidth + 25;
arrowIcons.forEach(icon => {
    icon.addEventListener('click', () =>{
        contentSlider.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
    })
})
// Trượt mobile
// let isDragStart = false , prePageX , preSrollLeft;
// const dragStart = (e) => {
//     isDragStart = true;
//     prePageX = e.pageX;
//     preSrollLeft = contentSlider.scrollLeft;
// }
// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     let possitionDiff = e.pageX -prePageX;
//     contentSlider.scrollLeft = preSrollLeft - possitionDiff;
// }
// const dragStop = (e) => {
//     isDragStart = false;
// }
// contentSlider.addEventListener('mousemove',dragging);
// contentSlider.addEventListener('mousedown',dragStart);
// contentSlider.addEventListener('mouseup',dragStop);