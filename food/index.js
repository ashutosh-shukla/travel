const offers = [
      "20% off on all pizzas!",
      "Buy 1 Get 1 Free on burgers!",
      "Free dessert with every order!",
      "50% off on your first order!",
      "10% off on orders above $50!"
  ];
  
  let currentOfferIndex = 0;
  
  function changeOffer() {
      const offerElement = document.getElementById('offer');
      currentOfferIndex = (currentOfferIndex + 1) % offers.length;
      offerElement.textContent = offers[currentOfferIndex];
  }
  
  setInterval(changeOffer, 3000); // Change offer every 3 seconds