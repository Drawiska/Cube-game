var cube = 
document.querySelector("#cube");

var cube = document.querySelector("#cube");

var style = getComputedStyle(cube);

document.body.addEventListener("keydown",myFunction);

function myFunction(event){
    var oldLeft = parseInt(style.left);
    var oldRight = parseInt(style.top);
    
    if(event.key === "ArrowRight"){
        var newLeft = oldLeft + 10;
        cube.style.left = newLeft + "px";
    } else if(event.key === "ArrowLeft"){
        var newLeft = oldLeft - 10;
        cube.style.left = newLeft + "px";
    } else if(event.key === "ArrowUp"){
        var newRight = oldRight - 10;
        cube.style.top = newRight + "px";
    } else if(event.key === "ArrowDown"){
        var newRight = oldRight + 10;
        cube.style.top = newRight + "px";
    } 
}

