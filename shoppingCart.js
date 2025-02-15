const products = [
    {name: 'shampoo', price: 300, quantity: 2},
    {name: 'soap', price: 150, quantity: 3},
    {name: 'comb', price: 200, quantity: 4},
    {name: 'shirt', price: 500, quantity: 2},
    {name: 'pant', price: 800, quantity: 2},
]

function shoppingCart(products){
    let total = 0;
    for(const product of products){
        total = total + product.price * product.quantity;
    }
    return total;
}

const shopping = shoppingCart(products);
console.log(shopping);