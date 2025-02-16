/*
first 100 ---> 100tk
second 100 ---> 90tk
above 200 ---> 70tk
*/

function discountTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100 = first100Price * 100;
        const remainingItems = quantity - 100;
        const above100 = remainingItems * second100Price;
        total = first100 + above100; 
        return total;
    }
    else{
        const first100 = first100Price * 100;
        const above100 = second100Price * 100;
        const remainingItems = quantity - 200;
        const above200 = remainingItems * above200Price;
        const total = first100 + above100 + above200;
        return total;
    }
}

const quantityBought = discountTotal(210);
console.log(quantityBought);