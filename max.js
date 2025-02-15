// Fundamental way:
const tim = 434;
const jim = 54;
const kim = 343;
if (tim > jim && tim > kim) {
    console.log('Tim is the greatest.');
}
else if (jim > tim && jim > kim) {
    console.log('Jim is the greatest.');
}
else {
    console.log('Kim is the greatest');
}


// short-cut way:

const max = Math.max(tim, jim, kim);
console.log('Max using Math.max is', max);