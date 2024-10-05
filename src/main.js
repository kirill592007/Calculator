let input = document.querySelector('.input')
let output = document.querySelector('.output')
let isLastChar = false
let isLastNum = true
let isDot = false
let isChar = false
let isRightBracket = false

document.addEventListener("keydown", (event) => {
    let key = event.key
    switch (key) {
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
            addNum(key)
            break;
        case 'Delete': case 'Backspace':
            deleteNum()
            break;
        case '(': case ')':
            addBracket(key)
            break;
        case '.':
            addDot(key)
            break;
        case '+': case '-': case '*': case '/':
            addChar(key)
            break;
        case '=': case 'Enter':
            resultInput()
            break;
        case 'c': case 'C':
            cleaning()
            break;
        default:
            break;
    }
})

const add = (value) => {
    if (input.innerText.length <= 15) {
        if (value === '.') {
            input.innerText += value
        } else {
            if (input.innerText === '0') {
                input.innerText = value
            } else {
                input.innerText += value
            }
        }
    }
}

const addNum = (num) => {
    if(isLastNum) {
        add(num)
    } else {
        input.innerText = '0'
        isLastNum = true
        isDot = false
        isChar = false
        add(num)
    }
    isLastChar = false
    resultOutput()
}

const addChar = (char) => {
    if (input.innerText === '0') {
        if (char === '-') {
            if(!isLastChar) add(char)
            isLastChar = true
        }
    } else {
        if(!isLastChar) add(char)
        isLastChar = true
    }
    isLastNum = true
    isChar = true
}

const cleaning = () => {
    input.innerText = '0'
    output.innerText = '0'
}

const resultInput = () => {
    input.innerText = eval(input.innerText)
    isLastNum = false
    isChar = false
}

const resultOutput = () => {
    output.innerText = eval(input.innerText)
}

const deleteNum = () => {
    if (input.innerText.split('').pop() === '.') {
        isDot = false
    }
    if (input.innerText.length === 1) {
        input.innerText = '0'
    } else {
        input.innerText = input.innerText.slice(0, input.innerText.length - 1)
    }
    resultOutput()
    isLastChar = false
    isLastNum = true
}

const addBracket = (bracket) => { 
    let inputArr = input.innerText.split('')
    if (bracket === '(') {
        if (input.innerText !== '0' && isRightBracket && !isLastChar) {
            inputArr = [...inputArr + '*'].filter((item) => {return item !== ','})
            if (input.innerText.length <= 15) {
                input.innerText = inputArr.join('')
            }
        }
    } else if (bracket === ')'){
        isRightBracket = true
    }
    add(bracket)
    resultOutput()
}

const addDot = (dot) => {
    if (!isDot || isChar) {
        add(dot)
    }
    isDot = true
    isChar = false
}