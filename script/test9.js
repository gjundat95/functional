// tagger
let temp  = 'tinhngo';
// console.log(`Hello: ${temp}`);

function upValues(strings, ...values){
    let result = strings[0];
    values.forEach((value, index)=>{
        console.log(value);
        //console.log(strings[index + 1]);
        result += value.toUpperCase()
        + strings[index + 1];
    });
    return result;
}

let firstName = 'Mark';
let lastName = 'Volkmann';

console.log(upValues `Hello ${firstName} ${lastName} !`);