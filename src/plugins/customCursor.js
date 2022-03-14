import $ from 'jquery';

export default function initCustomCursor(isTouch) {
    const follower = document.getElementById('cursor-follower');

    if(!isTouch) {
        var mouseX, mouseY;
    
        const positionElement = (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
    
            $(follower).css({
                transform: `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
            });
        }
    
        $(document).on('mousemove', (e) => {
            return setTimeout(() => {
                positionElement(e);
            }, 1);
        });
    }
    else{
        $(follower).css({
            display: 'none'
        });
    }
}