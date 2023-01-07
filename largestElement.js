//Find the largest element in an array
let numbers = [23, 81, 14, 5, 33, 631, 47, 78, 99];
let current = numbers[0];

for(let i=0; i< numbers.length; i++){

    if(numbers[i] > current){
        current = numbers[i];
    }
}
console.log("The largest element in the array is: " + current);