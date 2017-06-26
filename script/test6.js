let number = 2, name = 'tinhngo';
let obj = {number, name, age : 20};
//console.log(obj);

let obj1 = {
    number: 2,
    multiply: function(n){
        return n*n;
    },
    time(n){
        return this.number * n;
    }, 
    product : n => n,

};

// console.log(obj1.number);
// console.log(obj1.multiply(2));
// console.log(obj1.time(2));
// console.log(obj1.product(20));

class Shoe {
    constructor(brand, model, size){
        this.brand = brand;
        this.model = model;
        this.size = size;
        Shoe.count += 1;
    }
    static createdAny(){ return Shoe.count > 0; }
    equals(obj){
        return obj instanceof Shoe && 
        this.brand === obj.brand &&
        this.model === obj.model &&
        this.size === obj.size;
    }
    toString(){
        return this.brand + ' ' + this.model +  ' in size ' +
        this.size;
    }
}

// Shoe.count = 0;
// let s1 = new Shoe('Mizuno', 'Precision 10', 13);
// let s2 = new Shoe('Nike', 'Free 5', 12);
// let s3 = new Shoe('Mizuno', 'Precision 10', 13);
// console.log('created any?', Shoe.createdAny());

class RunningShoe extends Shoe {
    constructor(brand, model, size, type){
        super(brand, model, size);
        this.type = type;
        this.miles = 0;
    }

    addMiles(miles){
        this.miles += miles;
    }
    shouldReplace(){ return this.miles >= 500; }
}

class Person {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
}

let person = new Person('tinh ngo');
console.log(person.name);
person.name = 'Ngo Doan Tinh';
console.log(person.name);