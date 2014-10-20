untalk-ionic-example
====================

UnConfernece Lighting Talk - Ionic Example

Steps for creating the example mobile app

0. Install Node.js
  <pre>
  http://nodejs.org/
  </pre>

1. Ionic and Cordova
  sudo npm install -g cordova
  sudo npm install -g ionic

2. Create a tabbed Ionic-based App
  ionic start myApp tabs

3. Test the app in your browser
  cd myApp
  ionic serve

4. Add a new route to the app:

    Edit app.js

    .state('tab.books', {
      url: '/books',
      views: {
        'tab-books': {
          templateUrl: 'templates/tab-books.html',
          controller: 'BooksCtrl'
        }
      }
    });  

