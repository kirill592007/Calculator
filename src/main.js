let input = document.querySelector('.input')
let output = document.querySelector('.output')
let isLastChar = false
let isLastNum = true

const add = (value) => {
    if (input.innerText.length <= 9) {
        if (input.innerText === '0') {
            input.innerText = value
        } else {
            input.innerText += value
        }
    }
}

const addNum = (num) => {
    if(isLastNum) {
        add(num)
    } else {
        input.innerText = '0'
        isLastNum = true
        add(num)
    }
    isLastChar = false
    resultOutput()
}

const addChar = (char) => {
    if(!isLastChar) add(char)
    isLastNum = true
    isLastChar = true
}

const cleaning = () => {
    input.innerText = '0'
    output.innerText = '0'
}

const resultInput = () => {
    input.innerText = eval(input.innerText)
    isLastNum = false
}

const resultOutput = () => {
    output.innerText = eval(input.innerText)
}

const deleteNum = () => {
    if (input.innerText.length === 1) {
        input.innerText = '0'
    } else {
        input.innerText = input.innerText.slice(0, input.innerText.length - 1)
    }
    resultOutput()
    isLastChar = false
    isLastNum = true
}