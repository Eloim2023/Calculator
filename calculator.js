function Calculator(){
console.log("Calculator");
//get number 1 from the prompt
//get number 2 from the prompt
//convert the prompt values into numbers
//display them on the console

let num1= Number(prompt ("Enter number 1: "));
let num2= Number(prompt ("Enter number 2: "));
let op = prompt("Enter the operator (+ - / * )");

/*Sum(numOne,numTwo);
Sub(numOne,numTwo);
*/

switch (op){
    case"+":
        Sum(num1,num2);
        break;
    case"-":
        Sub(num1,num2);
        break;
    case"*":
        Mul(num1,num2);
        break;
    case"/":
        Div(num1,num2);
        break;
    default:
        alert("Enter a valid operator");
        break;
}

}

/*
console.log(numOne,numTwo);

document.getElementById("results").innerHTML=`
<p>${numOne} * ${numTwo} = ${numOne*numTwo} </p>
<p>${numOne} + ${numTwo} = ${numOne+numTwo} </p>
<p>${numOne} / ${numTwo} = ${numOne/numTwo} </p>
<p>${numOne} - ${numTwo} = ${numOne-numTwo} </p>
`;
*/

function Sum(a,b){
    let total = a+b;
    document.getElementById("results").innerHTML+=`<p>${a} + ${b} = ${total} </p>
    `;
    return total;
}
function Sub(a,b){
    let total = a-b;
    document.getElementById("results").innerHTML+=`<p>${a} - ${b} = ${total} </p>
    `;
    return total;
}
function Mul(a,b){
    let total = a*b;
    document.getElementById("results").innerHTML+=`<p>${a} * ${b} = ${total} </p>
    `;
    return total;
}
function Div(a,b){
    let total = a/b;
    document.getElementById("results").innerHTML+=`<p>${a} / ${b} = ${total} </p>
    `;
    return total;
}

