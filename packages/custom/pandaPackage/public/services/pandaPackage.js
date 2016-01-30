(function () {
  'use strict';

  angular
    .module('mean.pandaPackage')
    .factory('PandaPackage', PandaPackage);

  PandaPackage.$inject = [];

  function PandaPackage() {
    return {
      name: 'pandaPackage'
    };
  }
})();
