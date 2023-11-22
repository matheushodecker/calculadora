let currentInput = '';
let currentOperator = '';
let displayElement = document.getElementById('display');
let historyElement = document.getElementById('history');

function limpar(){
    currentInput = '';
    currentOperator = '';
    updateDisplay();
}

function add_numero(numero){
    currentInput += numero;
    updateDisplay();
}
function add_operator(operator){
    if(currentInput !== ''){    
        if(currentOperator !== ''){
            calcular();
        }
        currentOperator = operator;
        currentInput += ' ' + operator + ' ';
        updateDisplay();
    }
}

function calcular(){
    if (currentOperator !== '' && currentInput !== '') {
        let expression = currentInput.replace(/[^-()\d/*+.]/g, '');
        currentInput = eval(expression);
        currentOperator = '';
        updateDisplay();
    }
}
function total(){
    calcular();
    historyElement.innerText = '';
}
function updateDisplay() {
    displayElement.value = currentInput;
    historyElement.innerText = currentInput;
}   