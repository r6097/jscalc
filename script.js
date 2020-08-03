class Calculator {
    constructor(prevOPText, currOPText) {
        this.prevOPText = prevOPText;
        this.currOPText = currOPText;
    }

    clear() {
        this.currop = '';
        this.prevop = '';
        this.operation = undefined;
    }

    delete(){
        this.currop = this.currop.toString().slice(0,1);
    }

    appendNumber(number){
        // if currop is not defined, set it to empty string
        if (!(this.currop)) this.currop = ''; 
        // if number already contains '.' , then do nothing
        if (number === '.'  && this.currop.includes('.')) return;
        // otherwise append number
        this.currop = this.currop.toString() + number.toString();
    }

    chooseOperation(operation){
        // if there is nothing to operate on
        if(!(this.currop)) return;
        // if there was already an operation called previous to this one
        // complete that first, then this operation
        if(this.prevop) {
            this.operate();
        }
        // execute operation
        this.operation = operation;
        this.prevop = this.currop;
        this.currop = '';
    }
    // performs the math functions
    operate(){
        let answer;
        const prev = parseFloat(this.prevop);
        const curr = parseFloat(this.currop);
        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.operation){
            case '+':
                answer = prev + curr;
                break;
            case '-':
                answer = prev - curr;
                break;
            case '*':
                answer = prev * curr;
                break;
            case '/':
                answer = prev / curr;
                break;
            default:
                return;        
        }
        this.currop = answer;
        this.operation = undefined;
        this.prevop = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
        
    }

    updateDisplay(){
        this.currOPText.innerText = 
            this.getDisplayNumber(this.currop);

        if (this.operation) {
            this.prevOPText.innerText =
                 `${this.prevop} ${this.operation}`
        } else {
            this.prevOPText.innerText = '';
        }

    }
}

// Select calculator buttons by data attribute and set into variables
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const prevOPText = document.querySelector('[data-prev-op]');
const currOPText = document.querySelector('[data-curr-op]');

const calculator = new Calculator(prevOPText, currOPText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.operate();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})