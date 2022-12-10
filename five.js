let arr1 = ["Один", "Два", "Три", "Четыре", "Пять"];
console.log(arr1.length);
arr1.forEach(function(item, index, array) {
   console.log(item)
})

// вариант 2

let arr = ["Один", "Два", "Три", "Четыре", "Пять"];
console.log(arr.length);
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}