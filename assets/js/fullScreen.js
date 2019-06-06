//Full Screen Code

function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
document.querySelector("input").addEventListener("keydown",function(e){
    var charCode = e.charCode || e.keyCode || e.which;
    if (charCode == 27){
         alert("Escape is not allowed!");
        return false;
    }
});
document.onkeydown = function (evt) {
    if (evt.keyCode == 27) evt.preventDefault();
}
$(document).keyup(function(e) {

  if (e.keyCode == 27) {  }   // esc
});