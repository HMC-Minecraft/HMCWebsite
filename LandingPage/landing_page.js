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
});
