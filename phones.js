const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Xiaomi', price: 22000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 32000, camera: '12mp', color: 'black' },
    { name: 'Redmi', price: 28000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 15000, camera: '12mp', color: 'black' },
]

// Function for finding the cheapest phone

function getCheapestPhone(phones) {
    let min = phones[0];
    for (const phone of phones) {
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

const mobile = getCheapestPhone(phones);
console.log('The cheapest phone is ', mobile);