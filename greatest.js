const highest = [12, 24, 32, 44, 56, 78, 77, 65, 87, 9];

function maxNumber(numbers) {
    let max = numbers[0];
    for (num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = maxNumber(highest);
console.log('The greatest number is', max);


// writing the same code for finding the smallest numbers:
const array = [12, 24, 32, 44, 56, 78, 77, 65, 87, 9];

function minNumber(arr) {
    let min = arr[0];
    for(num of arr){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = minNumber(array);
console.log('The smallest number is',min);