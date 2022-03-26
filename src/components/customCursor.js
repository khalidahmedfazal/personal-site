import { useEffect } from "react";

import $ from "jquery";

export default function CustomCursor(props) {
    useEffect(() => {
        initCustomCursor(props.isTouch);
    }, []);

    return(
        <div className={"custom-cursor " + props.theme} id="custom-cursor">
        
        </div>
    );
}

const initCustomCursor = (isTouch) => {
    const cursor = document.getElementById('custom-cursor');
    let isVisible = false;
    let prevYOffset = 0;

    if(!isTouch) {
        var mouseX, mouseY;

        const positionElement = (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
    
            $(cursor).css({
                transform: `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`
            });
        }
    
        const positionElementScroll = (scrollY) => {
            mouseY += scrollY;
            console.log(mouseY)
    
            $(cursor).css({
                transform: `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`
            });
        }
    
        const handleCursor = (e) => {
            if(!isVisible) $(cursor).addClass("visible");
            
            return setTimeout(() => {
                positionElement(e);
            }, 1);
        }
    
        const handleCursorOnScroll = (e) => {
            var yOffset = window.pageYOffset;
            var amountToAdd = yOffset - prevYOffset;
    
            positionElementScroll(amountToAdd);
            prevYOffset = yOffset;
            console.log(prevYOffset)
        }
    
        $(document).on('mousemove', handleCursor);
        $(window).on('scroll', handleCursorOnScroll);
    }
    else{
        $(cursor).css({
            display: 'none'
        });
    }
}