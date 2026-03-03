// ==================== CALCULATOR CLASS ====================
class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
        this.history = this.loadHistory();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay();
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        this.updateDisplay();
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
        this.updateDisplay();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand + ' ' + operation;
        this.currentOperand = '';
        this.updateDisplay();
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        const operationSymbol = this.previousOperand.split(' ').pop();

        switch (operationSymbol) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    this.handleError('Cannot divide by zero');
                    return;
                }
                computation = prev / current;
                break;
            case '%':
                computation = prev % current;
                break;
            default:
                return;
        }

        // Add to history
        const calculation = `${prev} ${operationSymbol} ${current} = ${computation}`;
        this.addToHistory(calculation);

        this.currentOperand = computation.toFixed(10).replace(/\.?0+$/, '');
        this.operation = undefined;
        this.previousOperand = '';
        this.updateDisplay();
    }

    handleError(message) {
        this.currentOperand = message;
        this.currentOperandElement.classList.add('error-display');
        this.updateDisplay();
        
        setTimeout(() => {
            this.clear();
            this.currentOperandElement.classList.remove('error-display');
        }, 2000);
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand || '0';
        this.previousOperandElement.innerText = this.previousOperand || '';
    }

    // History management
    addToHistory(calculation) {
        this.history.unshift({
            calculation: calculation,
            timestamp: new Date().toLocaleTimeString()
        });
        if (this.history.length > 10) {
            this.history.pop();
        }
        this.saveHistory();
        this.displayHistory();
    }

    saveHistory() {
        localStorage.setItem('calcHistory', JSON.stringify(this.history));
    }

    loadHistory() {
        const saved = localStorage.getItem('calcHistory');
        return saved ? JSON.parse(saved) : [];
    }

    clearHistory() {
        this.history = [];
        this.saveHistory();
        this.displayHistory();
    }

    displayHistory() {
        const historyList = document.getElementById('historyList');
        
        if (this.history.length === 0) {
            historyList.innerHTML = '<p class="history-empty">No calculations yet</p>';
            return;
        }

        historyList.innerHTML = this.history.map((item, index) => `
            <div class="history-item" onclick="calculator.useFromHistory(${index})">
                <span>${item.calculation}</span>
                <span class="history-time">${item.timestamp}</span>
            </div>
        `).join('');
    }

    useFromHistory(index) {
        const item = this.history[index];
        const result = item.calculation.split('=')[1].trim();
        this.currentOperand = result;
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay();
    }
}

// ==================== INITIALIZATION ====================
const previousOperandElement = document.getElementById('previousOperand');
const currentOperandElement = document.getElementById('currentOperand');

const calculator = new Calculator(previousOperandElement, currentOperandElement);

// ==================== NUMBER BUTTONS ====================
const numberButtons = document.querySelectorAll('.btn-number');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.dataset.number);
    });
});

// ==================== OPERATOR BUTTONS ====================
const operatorButtons = document.querySelectorAll('.btn-operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.dataset.operator);
    });
});

// ==================== FUNCTION BUTTONS ====================
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const equalsBtn = document.getElementById('equalsBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

clearBtn.addEventListener('click', () => calculator.clear());
deleteBtn.addEventListener('click', () => calculator.delete());
equalsBtn.addEventListener('click', () => calculator.compute());
clearHistoryBtn.addEventListener('click', () => {
    calculator.clearHistory();
});

// ==================== KEYBOARD SUPPORT ====================
document.addEventListener('keydown', (e) => {
    // Number keys
    if (e.key >= '0' && e.key <= '9') {
        calculator.appendNumber(e.key);
    }
    
    // Decimal point
    if (e.key === '.') {
        e.preventDefault();
        calculator.appendNumber('.');
    }
    
    // Operations
    if (e.key === '+') {
        e.preventDefault();
        calculator.chooseOperation('+');
    }
    if (e.key === '-') {
        e.preventDefault();
        calculator.chooseOperation('-');
    }
    if (e.key === '*') {
        e.preventDefault();
        calculator.chooseOperation('×');
    }
    if (e.key === '/') {
        e.preventDefault();
        calculator.chooseOperation('÷');
    }
    if (e.key === '%') {
        e.preventDefault();
        calculator.chooseOperation('%');
    }
    
    // Equals
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculator.compute();
    }
    
    // Delete
    if (e.key === 'Backspace') {
        e.preventDefault();
        calculator.delete();
    }
    
    // Clear
    if (e.key === 'Escape') {
        e.preventDefault();
        calculator.clear();
    }
});

// ==================== INITIAL DISPLAY ====================
calculator.displayHistory();

console.log('Calculator loaded successfully!');
console.log('Keyboard shortcuts enabled: +, -, *, /, ., Enter (=), Backspace (Delete), Escape (Clear)');
