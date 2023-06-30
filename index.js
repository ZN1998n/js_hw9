let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let even = nums.filter((num) => num % 2 === 0)
let odd = nums.filter((num) => num % 2 !== 0)


console.log(
    even, odd
    )

let students = ['ayub', 'islom', 'daler', 'iskandar', 'shahzod']

let ln = students.find((name) => name.length === 8 )


console.log (
    ln
)

let studentsDel = ['ayub', 'islom', 'daler', 'iskandar', 'shahzod']

let del = prompt("Намишите цыфру для удаления студента")

if (del == 1) {
    alert(studentsDel.splice(0, 1))
} else if (del == 2) {
    alert(studentsDel.splice(1, 1))
} else if (del == 3) {
    alert(studentsDel.splice(2, 1))
} else if (del == 4) {
    alert(studentsDel.splice(3, 1))
} else if (del == 5) {
    alert(studentsDel.splice(4, 1))
} else {
    alert('Нету под этой цифрой')
}



let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];

let numberCount = arr.filter((element) => typeof(element) === "number").length;

if (numberCount > 5) {
    console.log('Гуд')
}


let cars = [2000,16000,40000,30000,35000,60000,13000,15000,45000,110000]

let from = prompt('from')
let up = prompt('up')

let filteredCars = cars.filter((car) => car >= from && car <= up);

console.log(filteredCars);


