document.querySelector("#button1").addEventListener("click", esille1);
document.querySelector("#button2").addEventListener("click", esille2);
document.querySelector("#button3").addEventListener("click", esille3);

var timesClicked = 0





function esille1(){

    timesClicked++;

    if (timesClicked%2==0) {
        card1.style.visibility = "hidden";
    }
    else {
        card1.style.visibility = "visible";
    }
    
}
function esille2(){

    timesClicked++;

    if (timesClicked%2==0) {
        card2.style.visibility = "hidden";
    }
    else {
        card2.style.visibility = "visible";
    }
    
}
function esille3(){

    timesClicked++;

    if (timesClicked%2==0) {
        card3.style.visibility = "hidden";
    }
    else {
        card3.style.visibility = "visible";
    }
    
}