(function () {
  'use strict';

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function (PandaPackage, app, auth, database) {

    app.get('/api/pandaPackage/example/anyone', function (req, res, next) {
      res.send('Anyone can access this');
    });

    app.get('/api/pandaPackage/example/auth', auth.requiresLogin, function (req, res, next) {
      res.send('Only authenticated users can access this');
    });

    app.get('/api/pandaPackage/example/admin', auth.requiresAdmin, function (req, res, next) {
      res.send('Only users with Admin role can access this');
    });

    app.get('/api/pandaPackage/example/render', function (req, res, next) {
      PandaPackage.render('index', {
        package: 'pandaPackage'
      }, function (err, html) {
        //Rendering a view from the Package server/views
        res.send(html);
      });
    });
  };
})();
