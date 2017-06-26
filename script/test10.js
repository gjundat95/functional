// array from js

let arr = new Array(1,2,3,4,5,6);
// console.log(arr);
// console.log(arr.find((value)=>{
//     return value === 4;
// }));

let arr1 = Array.from(arr);
//console.log(arr1);

let arr2 = Array.from('tinhngo');
//console.log(arr2);

let arr3 = Array.from([1,2,3],x=>x*x);
//console.log(arr3);

// let arr4 = arr.copyWithin(2,0);
// console.log(arr4);

// console.log(arr.findIndex((value)=>{
//     return value >= 4;
// }));

let arr5 = arr.fill(0,2,5);
console.log(arr5);

// (function test(){
//     var c = 'alo';
//     let d = 'ola';
//     {
//         var a = 'tinh';
//         let b = 'tuan anh';
//         console.log(c);
//         console.log(d);
//     }
//     console.log(a);
//     console.log(b);
// })();