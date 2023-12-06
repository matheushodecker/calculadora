let currentInput = '';
let currentOperator = '';
let displayElement = document.getElementById('display');
let historyElement = document.getElementById('history');
// let btn7 = document.getElementById("btn7");
// btn7.addEventListener("click", add_numero(7));

function limpar(){
    currentInput = '';
    currentOperator = '';
    updateDisplay();
}

function add_numero(numero){
    currentInput += numero;
    updateDisplay();
}
function add_operador(operator){
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
document.addEventListener("keypress", (e) => {
    if(e.key == 0){
    add_numero(0)}
    if(e.key == 1){
    add_numero(1)}
    if(e.key == 2){
    add_numero(2)}
    if(e.key == 3){
    add_numero(3)}
    if(e.key == 4){
    add_numero(4)}
    if(e.key == 5){
    add_numero(5)}
    if(e.key == 6){
    add_numero(6)}
    if(e.key == 7){
    add_numero(7)}
    if(e.key == 8){
    add_numero(8)}
    if(e.key == 9){
    add_numero(9)}
})