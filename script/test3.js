function letDemo(){
    console.log(bar);
    console.log(foo);
    var bar = 4;
    let foo = 5;
};
//letDemo();

function go(n){
    console.log(n);
    for(let item of n.a){
        console.log(item);
    }
};
//go({a:[1,2,3]});

let arr = [4, 5 ,6, 7, 8];
let [a,b,c] = arr;
console.log(a,b,c);
[a,b] = [b,a];
console.log(a,b,c);

let obj = {
    name: 'tinhngo',
    age: 15,
    address: 'kinh mon'
}
//console.log(obj);
let {name: ten, age, address} = obj;
//console.log(ten, age, address);

