(function () {
  'use strict';

  angular
    .module('mean.pandaPackage')
    .config(pandaPackage);

  pandaPackage.$inject = ['$viewPathProvider'];

  function pandaPackage($viewPathProvider) {
    $viewPathProvider.override('system/views/index.html', 'pandaPackage/views/index.html')
  }

})();
