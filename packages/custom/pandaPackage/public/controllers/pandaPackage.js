(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.pandaPackage')
    .controller('PandaPackageController', PandaPackageController);

  PandaPackageController.$inject = ['$scope', 'Global', 'PandaPackage'];

  function PandaPackageController($scope, Global, PandaPackage) {
    $scope.global = Global;
    $scope.package = {
      name: 'pandaPackage'
    };
  }
})();