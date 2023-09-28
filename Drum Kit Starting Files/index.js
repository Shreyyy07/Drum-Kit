
// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    // this for lop is applied coz we need to call 7 drum buttons so we made this for loop 
    // queryselectorAll cant complete this task coz coz we need to call function 7 times for 7 buttons so lot of lines of code
    //in place of .drum (classname) we can use buttons also but buttons can be more than 7 on html page so all the buttons will called up

document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    //here there is no specified function just calling the annonyoms function
     var buttonInnerHTML= this.innerHTML;

     makeSound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
    
});
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    //this function is used to call the audio even when that key is pressed 
    buttonAnimation(event.key);
});

function makeSound(key){
 
    switch(key){
        case "M":
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "Y":
            var tom2 =new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "D":
            var tom3 =new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "R":
            var tom4 =new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "U":
            var tom5 =new Audio("sounds/crash.mp3");
            tom5.play();
            break;

            case "M":
            var tom6 =new Audio("sounds/kick-bass.mp3");
            tom6.play();
            break;

            case "S":
            var tom7 =new Audio("sounds/snare.mp3");
            tom7.play();
            break;

            default:
                console.log(buttonInnerHTML);
     }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}