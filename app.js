(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = products;
  });

  var products = {
    name: 'Azurite',
    price: 110.50,
    canPurchase: false,
    soldOut: true
  };
})();
