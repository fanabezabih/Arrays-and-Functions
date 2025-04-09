//1. Taking in an array of strings and returns a new array with length of each string

function stringLengths(strArray) {
    return strArray.map(str => str.length);
}
const strings = ["Hi", "Fana"];
const lengths = stringLengths(strings);
console.log(lengths);



//2. filtering only even numbers
function evenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5, 6,7,8,9,10];
console.log(evenNumbers(numbers));

//3. Taking in an array of students and scores and returning a new array containing names of students above 75
function highScorers(students) {
    return students
        .filter(student => student.score > 75)
        .map(student => student.name);
}

const students = [{ name: "Emebet", score: 82 },{ name: "Arsema", score: 63 },{ name: "Judy", score: 95 }];
console.log(highScorers(students)); 

//4. Accept an array of numbers and returning a new array with each number squared using map()
function squareNumbers(nums) {
    return nums.map(function(num) { return num * num });
}
const nums = [1, 2, 3, 4];
console.log(squareNumbers(nums));

//5. array of mixed data types and retrun a new array containing only string elements by changing to uppercase.
function upperCaseStrings(arr) {
    return arr.filter(s => typeof s === 'string').map(s => s.toUpperCase());
}
const mixed = ["amazing", 5, "nature",6];
console.log(upperCaseStrings(mixed));
