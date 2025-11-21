function add7(a){
    return a +7
}

console.log(add7(10))

function multiply(a, b){
    return a * b
}

console.log(multiply(3,2))

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitalize("maja"))
console.log(capitalize("aBcD"))

function lastLetter(string){
    return string.charAt(string.length-1)
}

console.log(lastLetter("abcd"))