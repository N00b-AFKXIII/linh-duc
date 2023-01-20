const ANIMATE_ANIMATED = "animate__animated";

const ANIMATE_HEART = "animate__heartBeat";
const ANIMATE_SWING = "animate__swing";
const ANIMATE_ZOOM_INDOWN = "animate__zoomInDown";
const ANIMATE_LIGHT_SPEED = "animate__lightSpeedInLeft";

function updateClass(item, classNames){
    classNames.forEach(className => {
        item.classList.add(className);
    });
}

function removeClass(item, classNames){
    classNames.forEach(className => {
        item.classList.remove(className);
    });
}