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

//
