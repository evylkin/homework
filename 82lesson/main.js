// 1
function nameUser (name) {
    return `Hello ${name} `
}

const names = nameUser('Alex')
console.log(names)

// 2
const numbers = [6, 9, 10, 17, 7]

function forNumber(array) {
    for(i = 0; i < array.length; i++){
        if(array[i] > 10){
            return array[i]
        }
    }
}
console.log(forNumber(numbers))

// 3
function calc(number1, number2, operator){
if(operator === 'minus'){
    return number1 - number2
}
if( operator === 'plus'){
    return number1 + number2
}
if( operator === 'division'){
    return number1 / number2
}
if( operator === 'multiplication'){
    return number1 * number2
}
}
const answer = calc(4,4,'division')
console.log(answer)