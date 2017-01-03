(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = product;
  });

  var product = {
    name: 'Azurite',
    price: 110.50,
    canPurchase: true,
    soldOut: false
  };
})();
