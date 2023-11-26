// Add event listener to the menu toggle button
$(document).ready(function () {
  const menuToggle = $('.menu-toggle');
  const nav = $('nav');

  menuToggle.on('click', function () {
    nav.toggleClass('active');
  });

  // Fetch Bitcoin price from CoinGecko API
  function fetchBitcoinPrice() {
    $.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      .done(function (data) {
        const bitcoinPrice = data.bitcoin.usd;
        $('#bitcoin-price').text(`$${bitcoinPrice.toFixed(2)}`); // Display Bitcoin price with 2 decimal places
      })
      .fail(function (error) {
        console.error('Error fetching Bitcoin price:', error.statusText);
      });
  }

  // Fetch Bitcoin price initially and then every 1 minute (60,000 milliseconds)
  fetchBitcoinPrice();
  setInterval(fetchBitcoinPrice, 60000); // Update every 1 minute

  // Additional Bitcoin-related code from script.js_1
  // Fetch Bitcoin price initially and then every 5 minutes (300,000 milliseconds)
  async function fetchBitcoinPriceExtended() {
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
  fetchBitcoinPriceExtended();
  setInterval(fetchBitcoinPriceExtended, 300000); // Update every 5 minutes
});
