const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');

// 3 variable 
let prevNumber = ''
let calculatorOperator = ''
let currentNumber ='0'
//mengambil nilai
numbers.forEach(number =>{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//merubah nilai
const updateScreen = (number) => {
    calculatorScreen.value = number
}

//memberikan number ke current number
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//mengambil nilai dari operator
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

//untuk memindahkan nilai ke operator
const inputOperator = (operator) => {
    if (calculatorOperator === '') {
        prevNumber = currentNumber;
    }
    calculatorOperator = operator;
    currentNumber = '0'
}

//menambahkan logika pada tombol =
equalSign.addEventListener('click', () => {
   calculate()
   updateScreen(currentNumber)
})

//mem)buat function calculation
const calculate = () => {
    let result = ''
    switch(calculatorOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber);
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber);
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber);
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber);
            break
        default:
            break;
    }
    currentNumber = result;
    calculatorOperator = '';
}

//fungsi mereset nilai 
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

//fungsi reset
const clearAll = () => {
    prevNumber = ''
    calculatorOperator = ''
    currentNumber = '0'
}

//fungsi decimal
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

//menambahkan titk pada current number
inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}