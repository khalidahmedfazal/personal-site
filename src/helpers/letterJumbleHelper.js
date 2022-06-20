import $ from "jquery";

const jumbleLetters = (content, speed, element, isSectionHeading) => {
    var theLetters = "abcdefghijklmnopqrstuvwxyz";
    var increment = 3;
        
    var contentLength = content.length;       
    var si = 0;
    var stri = 0;
    var block = "";
    var fixed = "";

    if(isSectionHeading) {
        if(!$(element).hasClass("animated")) {
            (function jumble(i) {          
              setTimeout(function () {
                  if (--i) { jumble(i); }
                  nextFrame(i);
                  si = si + 1;        
              }, speed);
    
              $(element).addClass("animated");
            })(contentLength*increment+1);
        }
    }
    else{
        (function jumble(i) {          
            setTimeout(function () {
                if (--i) { jumble(i); }
                nextFrame(i);
                si = si + 1;        
            }, speed);
        })(contentLength*increment+1);
    }

    function nextFrame(pos){
        for (var i=0; i<contentLength-stri; i++) {
          var num = Math.floor(theLetters.length * Math.random());
          var letter = theLetters.charAt(num);
          block = block + letter;
        }

        if (si == (increment-1)){
            stri++;
        }

        if (si == increment){
            fixed = fixed +  content.charAt(stri - 1);
            si = 0;
        }
        
        $(element).html(fixed + block);
        block = "";
    }
}

export { jumbleLetters };