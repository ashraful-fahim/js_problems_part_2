function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide valid numbers.';
    }
    else {
        const mult = num1 * num2;
        return mult;
    }
}

const result = multiply(3, 5);
console.log(result);



function name(first, second) {
    if (typeof first !== 'string' || typeof second !== 'string') {
        return "Please provide a valid string.";
    }
    else {
        const full = first + ' ' + second;
        return full;
    }

}

const call = name(34, 'Fahim');
console.log(call);



// Javascript considers an array as an Object.
// So, to check if an input is array or not-
function getSecond(numbers) {
    if(Array.isArray(numbers) === false){
        return 'Please provide a valid array!'
    }
    else{
        return numbers[1];
    }
}

const second = getSecond(2, 4, 6, 22);
console.log(second);