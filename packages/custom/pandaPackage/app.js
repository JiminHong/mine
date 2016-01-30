'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var PandaPackage = new Module('pandaPackage');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */

 // Make sure this one loads first by adding 'system'
PandaPackage.register(function(app, auth, database, system) {

  //We enable routing. By default the Package Object is passed to the routes
  PandaPackage.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  PandaPackage.menus.add({
    title: 'pandaPackage1',
    link: 'link1',
    roles: ['authenticated','anonymous'],
    menu: 'mymain'
  });

  PandaPackage.menus.add({
    title: 'pandaPackage2',
    link: 'link2',
    roles: ['authenticated','anonymous'],
    menu: 'mymain'
  });

  PandaPackage.menus.add({
    title: 'pandaPackage3',
    link: 'link3',
    roles: ['authenticated','anonymous'],
    menu: 'mymain'
  });


  // Set views path, template engine and default layout
  // I COPIED AND PASTED FROM CORE FILES
  app.set('views', __dirname + '/server/views');
  
  PandaPackage.aggregateAsset('css', 'pandaPackage.css');
  PandaPackage.angularDependencies(['mean.system']);

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    PandaPackage.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    PandaPackage.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    PandaPackage.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return PandaPackage;
});
