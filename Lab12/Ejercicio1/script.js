 
//Timer
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const centiseconds = document.getElementById("centiseconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let intervalId;
let currentTime = 0;

function startTimer() {
	intervalId = setInterval(updateTimer, 10);
}

function stopTimer() {
	clearInterval(intervalId);
}

function resetTimer() {
	stopTimer();
	currentTime = 0;
	updateDisplay();
}

function updateTimer() {
	currentTime += 10;
	updateDisplay();
}

function updateDisplay() {
	let time = new Date(currentTime);
	minutes.innerText = addLeadingZero(time.getMinutes());
	seconds.innerText = addLeadingZero(time.getSeconds());
	centiseconds.innerText = addLeadingZero(Math.floor(time.getMilliseconds() / 10));
}

function addLeadingZero(number) {
	return number < 10 ? "0" + number : number;
}





////////////////////////////////////////////////////////////////
var cuadros = document.querySelectorAll('.cuadro');
var vacio = document.querySelector('.vacio');
let myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let FinalState = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function findZero() {
    var cuadros = document.querySelectorAll(".cuadro");
    for (var i = 0; i < cuadros.length; i++) {
        if (cuadros[i].id == '16') {
            return i;
        }
    }
}

function swapArray(search) {
    zeroi = Number(myArray.indexOf(16));
    indix = Number(myArray.indexOf(search));
    let aux = myArray[indix];
    myArray[indix] = myArray[zeroi];
    myArray[zeroi] = aux;
}

function swapArrayR(num1, num2) {
    let aux = myArray[num1];
    myArray[num1] = myArray[num2];
    myArray[num2] = aux;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

function swap(nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;
    nodeB.parentNode.insertBefore(nodeA, nodeB);
    parentA.insertBefore(nodeB, siblingA);
};


function ordenado(arr1, arr2) {
        if (arr1.length !== arr2.length) {
          return false;
        }
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            return false;
          }
        }
        return true;
};

const btn = document.querySelector("#btnR");
btn.addEventListener("click", function () {
    count = 0;
    clickCount.innerText = count;
    resetTimer();
    for (var i = 0; i < 5; i++) {
        var cuadros = document.querySelectorAll(".cuadro");
        var rN = getRandomInt(0, 15);
        var rN2 = getRandomInt(0, 15);
        swapArrayR(rN, rN2);
        swap(cuadros[rN], cuadros[rN2]);
    }
    startTimer();
});




const clickCount = document.getElementById("clickCount");
let count = 0;

cuadros.forEach(function (cuadro, i) {
    cuadro.addEventListener('click', function () {
        var cuadros = document.querySelectorAll(".cuadro");
        var search = Number(cuadro.id);
        var izero = findZero();
        var ip = Number(myArray.indexOf(search));
        var xF = Math.floor(ip / 4);
        var yF = Math.floor(ip % 4);
        var xZ = Math.floor(izero / 4);
        var yZ = Math.floor(izero % 4);
        //console.log("("+xF+","+yF+") ("+xZ+","+yZ+")");
        if (xF == xZ-1 && yF == yZ) 
        {
            swapArray(search);
            swap(cuadros[findZero()], cuadro);
            count++;
            clickCount.innerText = count;
            //console.log("arriba");
        }
        else if(xF == xZ && yF == yZ-1){
            swapArray(search);
            swap(cuadros[findZero()], cuadro);
            count++;
            clickCount.innerText = count;
            //console.log("inquierda");
        }
        else if(xF == xZ && yF == yZ+1){
            swapArray(search);
            swap(cuadros[findZero()], cuadro);
            count++;
            clickCount.innerText = count;
            //console.log("der");
        }
        else if(xF == xZ+1 && yF == yZ){
            swapArray(search);
            swap(cuadros[findZero()], cuadro);
            count++;
            clickCount.innerText = count;
            //console.log("abajo");
        }
        else{
            //console.log("no ");
            //swap(cuadros[findZero()], cuadro);
        }
        if(ordenado(myArray, FinalState)==true){
            alert("Niceee Job, lo has logrado en "+ count + " movimeintos");
            stopTimer();
            count = 0;
            clickCount.innerText = count;
        }
    })
});

