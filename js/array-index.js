let myArray = [1,2,3,4,5];
for(let i of myArray.keys()){
    let secondValue = myArray[i] * 5
    console.log(secondValue)
}

  myArray.forEach(function(value,index,arr){
    var secondValue2 = value * 30
    console.log(secondValue2)  
})

// sum add
var i = 0, sum = 0;
while(i++ < myArray.length){
    sum += i;
}
 
console.log(sum,'-----------------sum');


//একটি অ্যারের একটি অংশ উপর পুনরাবৃত্তি করা জন্য
const arr = [2,4,6,7,8,9,11]
arr.every(function(value,index){
    console.log(value,'------------every');
    return value % 2 === 0;
})