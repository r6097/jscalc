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

//
// detecting input
//
document.onkeypress = function (e) {
    e = e || window.event;
    const key = e.key;
    //console.log(key);
    //window.alert(key);
    
};