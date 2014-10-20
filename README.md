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

4. Add a new route to the app:<br/>
    -- Edit app.js

    <pre>
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

5. Add a new tab to the app:<br/>
    -- Edit tabs.html

    <pre>
    <!-- Books Tab -->
    <ion-tab title="Books" icon="icon ion-gear-b" href="#/tab/books">
      <ion-nav-view name="tab-books"></ion-nav-view>
    </ion-tab> 
    </pre>

6. Add a new Controler, BooksCtrl:<br/>
    -- Edit controllers.js

    <pre>
    .controller('BooksCtrl', function($scope, $http) {
      var url = "http://gsbpublic0.localhost:8082/vep/view/books.jsonp?callback=JSON_CALLBACK";
      $http.jsonp(url).success(function(data) {
        $scope.books = data;
        console.log(data);
      });
    });
    </pre>

7. Add the new tab page to the app:<br/>
    -- Edit tab-books.html

    <pre>
    <ion-view title="Books">
      <ion-content>
        <ion-list>
          <ion-item ng-repeat="book in books" type="item-text-wrap">
            <a href="{{book.field_link_unlimited.und[0].url}}" target="_blank">{{book.title}}</a> 
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-view>
    </pre>



