const UI = {
    heightInput: document.querySelector(".heightInput"),
    weightInput: document.querySelector(".weightInput"),
    buttonInput: document.querySelector(".resultButton"),
    result: document.querySelector(".result")
};

let audio1 = new Audio("Audio/448081__breviceps__tic-toc-click.wav");
let audio2 = new Audio("Audio/419023__jacco18__acess-denied-buzz.mp3");
let audio3 = new Audio("Audio/391282__igor1998__claping.wav");

function countBmi() {
    let weight = UI.weightInput.value;
    let height = UI.heightInput.value;
    if (weight>0 && height > 0) {
        result = weight/(height*height)
     
    return result.toFixed(2)
    }
}

UI.buttonInput.addEventListener("click", () => {
    const bmi = countBmi()
    UI.result.innerHTML = bmi; 
    if(bmi === undefined) {
        UI.result.innerHTML = "<br><br> užpildykite tuščius laukelius";
        audio2.play()
    }else if(bmi < 18.5) {
        UI.result.innerHTML += "<br><br> nepakankamas svoris <br><br> padidėjusi rizika ";
    }else if(bmi < 25) {
        UI.result.innerHTML += "<br><br> normalus svoris <br><br> minimali rizika";
        audio3.play()
    }else if(bmi < 30) {
        UI.result.innerHTML += "<br><br> antsvoris <br><br> padidėjusi rizika";
    }else if(bmi < 34.9) {
        UI.result.innerHTML += "<br><br> I laipsnio nutukimas <br><br> didelė rizika";
    }else if(bmi < 39.9) {
        UI.result.innerHTML += "<br><br> II laipsnio nutukimas <br><br> labai didelė rizika";
    }else if(bmi > 40) {
        UI.result.innerHTML += "<br><br> III laipsnio nutukimas <br><br> Itin didelė rizika";
    }

    UI.heightInput.value = '';
    UI.weightInput.value = '';
    UI.heightInput.focus();
    audio1.play();
});



