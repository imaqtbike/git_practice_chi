///NON PRIMITIVE DATA TYPES
//object === : array cũng là object
///array of string
///ARRAY (mảng)
/// index
/// những cái nằm trong array: element
let thingToBuyMarket = ['cà chua', 'táo', 'cá', 'thịt', 'rau']


///OBJECT

let name = 'Chi';
let birthYear = 2005;
let school = 'VinSchool';

let Chi = {
    name: 'Linh Chi',
    age: 17,
    birthYear: 2005,
    school: 'VinSchool',
    avarageScore: [8, 9, 10, 7]
}
// object vừa có dot notation mà vừa có bracket notaion

let num = '10';
let numPlus = +num
let numInt = parseInt(num);
let numberInt = Number(num);

///ternary operators
let age = 20;
let beverage = age >= 21 ? 'Beer' : 'Juice';
// if (age > = 21) {
//     beverage = 'beer'
// } else {
//     beverage = 'juice'
// }

//function without parameters
function square() {
    //body of function
    let num = 2;
    let sqa = num * num
    console.log(sqa)
}

//function with parameter
function double(number) {
    console.log(number * 2)
}
//gọi tới cái function: invoke function , call function

//function with two parameter
function sum(num1, num2) {
    console.log(num1 + num2)
}

function printFullname(fName, lName, mName) {
    return fName + lName + mName
}
//khi một function return một value, thì bản thân một cái function call đó sẽ chính là cái value đó


///anonymous function
//a function without name

const anoynmousFunc = function () {
    console.log('I am an Anonymous Function')
}

anoynmousFunc();

//arrow function

// function printFullname(fName, lName, mName) {
//     return fName + lName + mName
// }

let myFullName = (fName, lName, mName) => fName + lName + mName
console.log(myFullName('Nguyen', ' Cuong', ' Manh'))

function squreChuVi(r, pi = 3.14) {
    console.log(r * 2 * pi)
}

squreChuVi(20)
squreChuVi(20, 18)
printFullname('Cuong', 'a', 'b')


