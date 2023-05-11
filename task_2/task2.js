const jsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`
const person = JSON.parse(jsonString)
// console.log(person)
const personString = JSON.stringify(person)
console.log(personString)