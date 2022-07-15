var currentPos = 0;
var intervalHandle;

function beginAnimate() {
	document.getElementById("covid").style.position = "absolute";
	document.getElementById("covid").style.left = "0px";
    document.getElementById("covid").style.top = "100px";
    // cause the animateBox function to be called
    intervalHandle = setInterval(animateBox,50);
}

function animateBox() {
    // set new position
    currentPos+=5;
    document.getElementById("covid").style.left = currentPos + "px";
    // 
    if ( currentPos > 900) {
        // clear interval
        clearInterval(intervalHandle);
        // reset custom inline styles
        document.getElementById("covid").style.position = "";
        document.getElementById("covid").style.left = "";
        document.getElementById("covid").style.top = "";
    }
}

window.onload =  function() {
	setTimeout(beginAnimate,5000);
};

