const rowLength = document.getElementById("row-length");

const plantSpacing = document.getElementById("plant-spacing");

const rowRows = document.getElementById("row-rows");
    
const rows = document.getElementById("rows");

const body = document.getElementsByTagName("BODY")[0];

const answerDiv = document.getElementsByClassName("answer-div")[0];

const div2 = document.getElementById("div2");

let button1 = document.getElementById("button");

let button2 = document.getElementById("button2");

let button3 = document.getElementById("button3");

function calculate() {
    let a = parseFloat(rowLength.value, 10);
    let b = parseFloat(plantSpacing.value, 10);
    let c = parseFloat(rows.value, 10);
    let d = parseFloat(rowRows.value, 10);
    return Math.ceil(((((a*12)/b)*c)*d))
}

function calculate2() {
    let a = parseFloat(rowLength.value, 10);
    let b = parseFloat(plantSpacing.value, 10);
    let c = parseFloat(rows.value, 10);
    let d = parseFloat(rowRows.value, 10);
    return Math.ceil(((((a*12)/b)*c)*d)*2);;
}

function calculate3() {
    let a = parseFloat(rowLength.value, 10);
    let b = parseFloat(plantSpacing.value, 10);
    let c = parseFloat(rows.value, 10);
    let d = parseFloat(rowRows.value, 10);
    return Math.ceil(((((a*12)/b)*c)*d)*3);
}

    answerDiv.style.visibility = "hidden";
    div2.style.visibility = "hidden";
    div3.style.visibility = "hidden";
    
    button1.addEventListener ("click", (e) => {
    if (answerDiv !== null) {
        answerDiv.innerHTML = "";
    }
    button1 = e.target;
    answerDiv.style.visibility = "visible";
    div2.style.visibility = "visible";
    div3.style.visibility = "visible";
    answerDiv.innerHTML += "<p>" + calculate() + " seeds" + "</p>";
});

    button2.addEventListener ("click", (e) => {
    if (div2 !== null) {
        div2.innerHTML = "";
    }
    button2 = e.target;
    div2.innerHTML = "<p>" + calculate2() + " seeds" + "</p>";

    });

    button3.addEventListener ("click", (e) => {
    if (div3 !== null) {
        div3.innerHTML = "";
    }
    button3 = e.target;
    div3.innerHTML = "<p>" + calculate3() + " seeds" + "</p>";
    });
