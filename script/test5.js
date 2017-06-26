// var a = [];
// console.log(a);
// a + 1;
// console.log(a);

// var sum = [1,2,4,5,6,7].reduce((acc, value)=>{
//     console.log(acc);
//     console.log(value);
//     return acc + value;
// },0);
// console.log(sum);

let arr = [1,2,3,4];
var average = numbers => {
    let sum = numbers.reduce((acc, value)=>{
        return acc + value;
    });
    return sum / numbers.length;
}

console.log(average(arr));