const imgArr = [
    "slider1.png",
    "slider2.png"
];
var curIdx = 0;
var x;
function rightStart() {
     x = setInterval(function() {
        curIdx ++;
        if(curIdx >= imgArr.length) {
            curIdx = 0;
        }
        document.querySelector('.slider-img').src="img/" + imgArr[curIdx];
    },2000)
}
function rightStop() {
    clearInterval(x);
}
