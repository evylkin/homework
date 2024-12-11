// const user = {
//     name: 'Eva',
//     age: 17,
// }

// 2
// const users = {
//         sayHello(name) {
//         return `Hello ${name}`
//     }
// }
// console.log(users.sayHello('Tom'))

// 3
const usersPosition = [
    {
        name:'Alex',
        age:25,
        isAdmin: false
    },
    {
        name:'John',
        age:35,
        isAdmin: true
    },
    {
        name:'Daniel',
        age: 5,
        isAdmin: false
    },

]

let notAdmin = 0


for(let i = 0; i < usersPosition.length; i++ ){
    if (usersPosition[i].isAdmin != true ){
        notAdmin = notAdmin + 1
    }
    
}
console.log(notAdmin)
