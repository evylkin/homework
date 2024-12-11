// const myName = 'Eva'
// const lastName = 'Devochkina'
// let myAge = 17
// console.log(myName, lastName,myAge )

// const name = 'ящик'
// const color = 'желтый'
// console.log(`${name} имеет ${color} цвет` )



// ------урок 79 -------
const age = 15
if(age >= 18){
    console.log('Вы совершеннолетний')
} else{
    console.log('Вам еще нет 18')
}

age >= 18 ?  console.log('Вы совершеннолетний') :  console.log('Вам еще нет 18')
switch (age) {
    case 17:
    case 16:
    case 15:
        console.log('Вам еще нет 18')
        break
    case 18:
        console.log('Вы совершеннолетний')
        break
}

