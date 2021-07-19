const button = document.getElementById('slideNext');
button.onclick = function () {
    const slider_container = document.getElementById('services-block-main');
    sideScroll(slider_container,'right',20,330,20);
};

const back = document.getElementById('slidePrev');
back.onclick = function () {
    const slider_container = document.getElementById('services-block-main');
    sideScroll(slider_container,'left',20,330,20);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    const slideTimer = setInterval(function(){
        if(direction === 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
