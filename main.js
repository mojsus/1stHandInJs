
// keydown event
let elementInput = document.querySelector("#email");
elementInput.addEventListener("keydown", function () {
    if(elementInput.value.length < 4 ){
        elementInput.classList.add("bg-lightgrey");
    }else {
        elementInput.classList.remove("bg-lightgrey");
        elementInput.classList.add("bg-lightsalmon");
    }
})


// mouseover and mouseout event 

document.getElementById("title").addEventListener("mouseover", mouseOver);
document.getElementById("title").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("title").style.color = "pink";
}

function mouseOut() {
  document.getElementById("title").style.color = "black";
}

// mousedown and mouseup event 

document.getElementById("title").addEventListener("mousedown", mouseDown);
document.getElementById("title").addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.getElementById("title").innerHTML = "Karolinas website";
}

function mouseUp() {
  document.getElementById("title").innerHTML = "Website Karolinas";
}

// click event

document.getElementById("button-id").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("button-id").innerHTML = "You are signed in";
  
}


// change event 
document.getElementById("email").addEventListener("change", writeEmail);

function writeEmail() {
  let x = document.getElementById("email");
  x.value = x.value.toUpperCase();
}


