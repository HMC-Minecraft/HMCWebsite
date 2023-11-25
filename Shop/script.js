// Get the cart items table
const cartTable = document.querySelector('.cart-table tbody');

// Add a row to the table for each cart item
for (const item of cartItems) {
    const row = document.createElement('tr');

    const productCell = document.createElement('td');
    productCell.textContent = item.product.name;
    row.appendChild(productCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = item.quantity;
    row.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${item.product.price}`;
    row.appendChild(priceCell);

    cartTable.appendChild(row);
}

// Calculate the total price of the cart
const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

// Add forms of payment
const paymentMethods = [
    'American Express',
    'Amazon Pay',
    'Samsung Pay',
    'Google Pay',
    'Apple Pay',
    'PayPal',
    'Zelle',
    'Shop Pay',
    'Bitcoin'
];

// Create a container for payment methods
const paymentContainer = document.createElement('div');
paymentContainer.classList.add('payment-container');

// Add each payment method to the container
for (const method of paymentMethods) {
    const paymentMethod = document.createElement('div');
    paymentMethod.textContent = method;
    paymentContainer.appendChild(paymentMethod);
}

// Append the payment container to the body
document.body.appendChild(paymentContainer);

// Fetch Bitcoin price initially and then every 5 minutes (300,000 milliseconds)
async function fetchBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        const bitcoinPrice = data.bitcoin.usd;

        const bitcoinPriceElement = document.getElementById('bitcoin-price');
        bitcoinPriceElement.textContent = `$${bitcoinPrice}`;
    } catch (error) {
        console.error('Error fetching Bitcoin price:', error.message);
    }
}

// Fetch Bitcoin price initially and then every 5 minutes (300,000 milliseconds)
fetchBitcoinPrice();
setInterval(fetchBitcoinPrice, 300000); // Update every 5 minutes
