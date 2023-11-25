// Add event listener to the menu toggle button
$(document).ready(function () {
  const menuToggle = $('.menu-toggle');
  menuToggle.on('click', function () {
    const nav = $('nav');
    nav.toggleClass('active');
  });

  // Fetch Bitcoin price from CoinGecko API
  // Fetch Bitcoin price initially and then every 1 minute (60,000 milliseconds)
  function fetchBitcoinPrice() {
    $.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', function (data) {
      const bitcoinPrice = data.bitcoin.usd;
      $('#bitcoin-price').text(`$${bitcoinPrice}`);
    })
    .fail(function (error) {
      console.error('Error fetching Bitcoin price:', error.statusText);
    });
  }

  // Fetch Bitcoin price initially and then every 1 minute (60,000 milliseconds)
  fetchBitcoinPrice();
  setInterval(fetchBitcoinPrice, 60000); // Update every 1 minute
});
