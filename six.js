let arr = [1, 2, 3, 4, "5"];

let isSame = true;
for (let i = 0; i < arr.length; i++){
    for  (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            isSame = false;
        }
    }
}
if (isSame) {
    console.log("array is the same");
} else {
    console.log("array is not the same");
}