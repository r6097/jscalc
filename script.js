// math operations
function add (a, b) {    return Number(a) + Number(b); }
function subtract (a, b) {    return Number(a) - Number(b);}
function multiply (a, b) {    return Number(a) * Number(b);}
function divide (a, b) {    return Number(a) / Number(b);}
//found online https://www.jacklmoore.com/notes/rounding-in-javascript/
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
//operator function
function operate(operator, a, b){
    switch (operator) {
        case add:
            add(a, b);
            break;
        case subtract:
            subtract(a, b);
            break;
        case multiply:
            multiply(a, b);
            break;
        case divide:
            divide(a, b);
            break;
    }
}
//create button function
function createButton(buttonObj){
    let outbutton = document.createElement('button');
    outbutton.id = buttonObj.id;
    outbutton.innerHTML = buttonObj.text;
    if(buttonObj.class) outbutton.classList.add(buttonObj.class);
    grid.appendChild(outbutton);
}
//
// create buttons as objects
//
const clearButton =     {id: "clear", text:"CA"};
const nineButton =      {id: "nine", class:"num", text:"9"};
const eightButton =     {id: "eight", class:"num", text:"8"};
const sevenButton =     {id: "seven", class:"num", text:"7"};
const divideButton =    {id: "divide", class:"operator", text:"/"};
const sixButton =       {id: "six", class:"num", text:"6"};
const fiveButton =      {id: "five", class:"num", text:"5"};
const fourButton =      {id: "four", class:"num", text:"4"};
const multiplyButton =  {id: "multiply", class:"operator", text:"*"};
const threeButton =     {id: "three", class:"num", text:"3"};
const twoButton =       {id: "two", class:"num", text:"2"};
const oneButton =       {id: "one", class:"num", text:"1"};
const subtractButton =  {id: "subtract", class:"operator", text:"-"};
const zeroButton =      {id: "zero", class:"num", text:"0"};
const decimalButton =   {id:"decimal", text:"."};
const additionButton =  {id: "add", class:"operator", text:"+"};
const equalButton =     {id:"equals", text:"="};

const arrayButtons =[ clearButton, nineButton, eightButton, sevenButton,
                    divideButton, sixButton, fiveButton, fourButton,
                    multiplyButton, threeButton, twoButton, oneButton,
                    subtractButton, zeroButton, decimalButton, additionButton,
                    equalButton];

//insert buttons into hmtl
const grid = document.querySelector("#grid");
arrayButtons.forEach(createButton);
//
// detecting input
//
var str =""; //holds input
var operator;//holds type of operation
// buttons appear on screen when clicked 
const keys = document.querySelector("#grid");
keys.addEventListener("click", e => {
    if(e.target.matches('button')){
        const key = e.target;
        const keyClass = key.className;
        if(keyClass == 'num'){
            console.log("its a number");
        }else if(keyClass == 'operator'){
            console.log("its operator");
        }
        if(!keyClass){ console.log("idonk");}
    }
})