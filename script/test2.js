function report(firstName, lastName, ...colors){
    let phrase = colors.length === 0 ? 'no colors' :
    colors.length === 1 ? 'the colors ' + colors[0] :
    'the colors ' + colors.join(' and ');
    console.log(firstName, lastName, phrase);
};

let temp1 = [1,2];
let temp2 = [3,4];
temp1.push(...temp2);
console.log(temp1);

let dateParts = [1995, 02, 20];
let birthday = new Date(...dateParts);
console.log(birthday.toDateString());

report('Tinh', 'Ngo');
report('Tinh', 'Ngo', 'red');
report('Tinh', 'Ngo', 'red', 'yellow', 'green');