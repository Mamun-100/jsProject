//0 to 9 print
for (var i = 0, length = 10; i<length; i++){
    console.log(i)
}

// low to max print
var myArray = [1,5,9,7,12];
for(var i = 0, length = myArray.length; i<length; i++){
    console.log(myArray[i])
}

// max to low print
for(var i = myArray.length - 1; i > -1; i--){
    console.log(myArray[i])
}

var arr = [2,5,9,45,36,98,100];
var i = 0, length = arr.length;
for(; i < length;){
console.log(arr[i]);
i++;
}


var key = 0, value;
for(; value = arr.length[key++];){
    console.log(value,'------------')
}


// for of loop
var arr1 = [11,12,13,14,15]
for(var element of arr1){
    console.log(element,'for of')
}
for(var i of arr1){
    var n = i * 2;
    console.log(n);
}

for(var i of arr1){
    var n = i * 2;
    console.log(n);
}

//for in loop
let number = [12,13,14,15,16];
number.foo = 'mamunur rashid'
for(let i in number){
    console.log(i)
}