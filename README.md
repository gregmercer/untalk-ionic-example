untalk-ionic-example
====================

UnConfernece Lighting Talk - Ionic Example

Steps for creating the example mobile app

0. Install Node.js
  <pre>
  http://nodejs.org/
  </pre>

1. Ionic and Cordova
  <pre>
  sudo npm install -g cordova
  sudo npm install -g ionic
  </pre>

2. Create a tabbed Ionic-based App
  <pre>
  ionic start myApp tabs
  </pre>

3. Test the app in your browser
  <pre>
  cd myApp
  ionic serve
  </pre>

4. Add a new route to the app:
    <pre>

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


    </pre>

