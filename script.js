const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

/* Button clicks */
buttons.forEach(btn => {
    btn.addEventListener("click", () => handleInput(btn.textContent));
});

/* Mobile keyboard support */
document.addEventListener("keydown", (e)=>{
    handleInput(e.key);
});

function handleInput(value){

    if(value === "C"){
        display.value = "";
    }
    else if(value === "=" || value === "Enter"){
        try{
            display.value = eval(display.value);
        }catch{
            display.value = "Error";
        }
    }
    else if(value === "Backspace"){
        display.value = display.value.slice(0,-1);
    }
    else if("0123456789+-*/.".includes(value)){
        display.value += value;
    }
}

/* Scroll animation */
const about = document.querySelector(".about");

function reveal(){
    const windowHeight = window.innerHeight;
    const elementTop = about.getBoundingClientRect().top;

    if(elementTop < windowHeight - 80){
        about.classList.add("show");
    }
}

window.addEventListener("scroll", reveal);
reveal();
