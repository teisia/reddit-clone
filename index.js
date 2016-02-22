var app = angular.module('RedditClone', ['angularMoment', 'ngAnimate']);
app.controller('reddit', function($scope) {
  $scope.showme = false;


  $scope.posts= [
    { title: 'Big Sur, CA',
      author: 'Michael Scott',
      description: 'Big Sur is a lightly populated region of the Central Coast of California where the Santa Lucia Mountains rise abruptly from the Pacific Ocean. Although it has no specific boundaries, many definitions of the area include the 90 miles (140 km) of coastline from the Carmel River in Monterey County south to the San Carpoforo Creek in San Luis Obispo County,[1][2] and extend about 20 miles (30 km) inland to the eastern foothills of the Santa Lucias.',
      image: 'https://res-5.cloudinary.com/simpleview/image/upload/f_auto,q_60,w_1200/v1/clients/monterey_county/EE9764434C2E06411FBECA7C33189403_14f2651a-d1d8-4936-aa46-d59e56c3d904.jpg',
      votes: 11,

      date: Date.now(),
      comments: [{
          author: 'Joe',
          comment: 'Big Sur is the most beautiful place in the world. It feels like you are in middle earth/Jurassic Park.',
      },
      {
        author: 'Tom',
        comment: 'Most dramatic, breathtaking views you will ever see.'
      }]
    },
    { title: 'Conundrum Hot Springs, Aspen, CO',
      author: 'Mozart',
      description: 'The Conundrum Hot Springs are located 8.5 miles from Conundrum Creek Trailhead off of Castle Creek Road in the Maroon Bells-Snowmass Wilderness. The hot spring complex contains two main pools and four smaller springs that together discharge approximately 130 GPM with a max temperature just over 100 degrees F (each pool varies).',
      image: 'http://www.cpr.org/sites/default/files/images/conundrum-hot-springs.jpg',
      votes: 5,
      date: Date.now(),
      comments: [{
          author: 'Kelly',
          comment: 'This was an awesome backpacking trip! The hot springs are worth the hike.'
      }]
    },
    { title: 'Moab, UT',
      author: 'Beyonce',
      description: 'Moab is a city in Grand County, in eastern Utah, in the western United States. The population was 5,046 at the 2010 census. It is the county seat and largest city in Grand County.[3] Moab attracts a large number of tourists every year, mostly visitors to the nearby Arches and Canyonlands National Parks. The town is a popular base for mountain bikers who ride the extensive network of trails including Slickrock Trail, and off-roaders who come for the annual Moab Jeep Safari.',
      image: 'https://kevinraber.files.wordpress.com/2012/09/moab-2-cf007518-fix.jpg',
      votes: 0,
      date: Date.now(),
      comments: []
    },
    { title: 'Dolly Sods Wilderness, WV',
      author: 'Mark McMorris',
      description: 'The Dolly Sods Wilderness — originally simply Dolly Sods — is a U.S. Wilderness Area in the Allegheny Mountains of eastern West Virginia, USA, and is part of the Monongahela National Forest (MNF) of the U.S. Forest Service (USFS). It is a rocky, high-altitude plateau with sweeping vistas and lifeforms normally found much farther north in Canada.  To the north, the distinctive landscape of "the Sods" is characterized by stunted (“flagged”) trees, wind-carved boulders, heath barrens, grassy meadows created in the last century by logging and fires, and sphagnum bogs that are much older.',
      image: 'https://s-media-cache-ak0.pinimg.com/564x/db/de/10/dbde10d570a8b34bfccc06887f2f3d14.jpg',
      votes: -2,
      date: Date.now(),
      comments: []
    }
  ];

  $scope.togglePostForm = function () {
    $scope.showme = !$scope.showme;
  }

  $scope.toggleComments = function(x) {
    x.showing = !x.showing
  }

  $scope.toggleNewComm = function(y) {
    y.formshowing = !y.formshowing
  }

  $scope.addPost = function() {
    var postData = {};
    $scope.newpost = false;
    postData.title = $scope.title;
    postData.author = $scope.author;
    postData.description = $scope.description;
    postData.image = $scope.image;
    postData.date = Date.now();
    postData.votes = 0;
    postData.formshowing = false;
    postData.showing = false;
    postData.comments = [];
    $scope.posts.push(postData);
  }
});
