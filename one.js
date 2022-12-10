// exercise 1

let a = prompt ("input");

a = +a;
console.log (typeof a);

if (a% 2 ===0) {
    console.log ("четное");
}
else if (a% 1 ===0) {
    console.log ("нечетное");
}
else {
    console.log("Упс, кажется вы ошиблись")
}

console.log (isNaN (a));