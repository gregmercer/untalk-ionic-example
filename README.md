untalk-ionic-example
====================

UnConfernece Lighting Talk 2014 - Ionic Example

Note: I've provide a view of the tree structure of the files for this app here:
https://raw.githubusercontent.com/gregmercer/untalk-ionic-example/master/tree.txt

Here's a screenshot of the mobile app we are going to create:<br/>
![alt text](https://raw.githubusercontent.com/gregmercer/untalk-ionic-example/master/books_tab.png "Screenshot of newApp")

Steps for creating the example mobile app:

0. Install Node.js
  <pre>
  http://nodejs.org/
  </pre>

1. Install Ionic and Cordova
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

4. Add a new tab to the app:<br/>
    -- Edit tabs.html

    ```
    <!-- Books Tab -->
    <ion-tab title="Books" icon="icon ion-gear-b" href="#/tab/books">
      <ion-nav-view name="tab-books"></ion-nav-view>
    </ion-tab> 
    ```

5. Add a new route to the app:<br/>
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

6. Add a new Controler - BooksCtrl:<br/>
    -- Edit controllers.js

    ```
    .controller('BooksCtrl', function($scope, $http) {
      var url = "http://gsbpublic0.localhost:8082/vep/view/books.jsonp?callback=JSON_CALLBACK";
      $http.jsonp(url).success(function(data) {
        $scope.books = data;
        console.log(data);
      });
    });
    ```

7. Add the new tab page to the app:<br/>
    -- Edit tab-books.html

    ```
    <ion-view title="Books">
      <ion-content>
        <ion-list>
          <ion-item ng-repeat="book in books" type="item-text-wrap">
            <a href="{{book.field_link_unlimited.und[0].url}}" target="_blank">{{book.title}}</a> 
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-view>
    ```

Drupal Changes

1. Download these modules:

  <pre>
    services
    services_views

    Modules for Services
    https://www.drupal.org/project/services (includes REST server)
    https://www.drupal.org/project/services_views
  </pre>
  
2. Enable these modules:

    <pre>
    In Drupal goto this page:
    admin/modules

    services (rest_server)
    services_views
    </pre>
    
    ![alt text](https://raw.githubusercontent.com/gregmercer/untalk-ionic-example/master/enable_modules.png "Screenshot of Drupal Modules Page")
    
3. Configure Services:

    <pre>
    In Drupal goto this page:
    admin/structure/services
    
    Add two endpoints:
    admin/structure/services/list/ep/resources
    admin/structure/services/list/vep/resources
    </pre>

    ![alt text](https://raw.githubusercontent.com/gregmercer/untalk-ionic-example/master/end_points.png "Screenshot of Drupal Services End Point Page")

    ![alt text](https://raw.githubusercontent.com/gregmercer/untalk-ionic-example/master/end_point_ep.png "Screenshot of Services EP End Point Page")
    
    ![alt text](https://raw.githubusercontent.com/gregmercer/untalk-ionic-example/master/end_point_vep.png "Screenshot of Services VEP End Point Page")    

4. Test our new Services in Drupal:

    <pre>
    Go to these endpoints:

    ep as an endpoint, and node as a resource
    http://gsbpublic0.localhost:8082/ep/node/302036.json

    vep as an endpoint, and view as a resource
    also we've created a very simple view called: books
    http://gsbpublic0.localhost:8082/vep/view/books.json
    </pre>
