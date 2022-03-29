let vh, vw, isTouch, isMobile, mobileVw = 768;

vh = window.innerHeight;
vw = window.innerWidth;
isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
isMobile = vw <= mobileVw;

export { vh, vw, isTouch, isMobile, mobileVw };