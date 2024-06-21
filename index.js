document.querySelector("#click").addEventListener("click",function(){
    document.querySelector("#box").classList.remove("invisible");
    clickSound();

});

document.querySelector("#absolutely").addEventListener("click",disappear);

document.querySelector("#no").addEventListener("mouseover",function(){
    document.querySelector("#no").innerHTML="No?..hell YEAH!!";
});
document.querySelector("#no").addEventListener("mouseout",function(){
    document.querySelector("#no").innerHTML="No?..hell";
});
document.querySelector("#no").addEventListener("click",animated);

function clickSound() {
    var clickAudio = new Audio('clickme.wav');
    clickAudio.play();
}

function disappear(){
    document.querySelector("#box").classList.add("invisible");
    var abs = new Audio('accept.wav');
    abs.play();
}

function animated(){     
    document.querySelector("#box").classList.add("invisible");
    var abs = new Audio('hellyeah.wav');
    abs.play();
}