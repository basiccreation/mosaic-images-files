(function() {
  var app = angular.module('gemStore', []);

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
