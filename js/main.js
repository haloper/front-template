requirejs.config({
    baseUrl: 'js',
    shim : {
        'bootstrap' : { 
          'deps' : [
            'jquery'
          ]
        },
        'backbone' : {
          'deps' : [
            'jquery',
            'underscore'
          ],
          'exports' : 'Backbone'
        },
        'jquery' : {
          'exports' : '$'
        },
        'underscore' : {
          'exports' : '_'
        }
    },
    paths: {
    	'jquery': '../node_modules/jquery/dist/jquery',
    	'backbone': '../node_modules/backbone/backbone',
    	'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap',
    	'underscore': '../node_modules/backbone/node_modules/underscore/underscore',
      'react': '../node_modules/react/dist/react',
      'react-dom': '../node_modules/react-dom/dist/react-dom',
      'babel': '../node_modules/requirejs-react-jsx/babel-5.8.34.min',
      'jsx': '../node_modules/requirejs-react-jsx/jsx',
      'text': '../node_modules/requirejs-text/text',
      'app': 'app'
    },
    config: {
      babel: {
        sourceMaps: 'inline', // One of [false, 'inline', 'both']. See https://babeljs.io/docs/usage/options/
        fileExtension: '.jsx' // Can be set to anything, like .es6 or .js. Defaults to .jsx
      }
    }
});

//controller
requirejs(['jsx!view/default', 'jsx!view/myapp', 'backbone']
, function(DefaultView, MyApp) {

    var Workspace = Backbone.Router.extend({

      routes: {
        'myapp': 'myapp',
        '*path':  'defaultRoute'
      },

      myapp: function() {
        var myapp = new MyApp();
        myapp.init();      
      },

      defaultRoute: function() {
        var defaultView = new DefaultView();
        defaultView.init();
      }
      
    });

    var app = new Workspace;

    Backbone.history.start();
    
    
});