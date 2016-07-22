
angular.module('app').controller('PostsCtrl', function($scope, PostsSvc) {

    PostsSvc.fetch()
        .success(function(posts) {
            $scope.posts = posts;
        })
        .error(function(err) {
            console.log(err);
        });

    $scope.addPost = function() {
        if($scope.postBody) {
            PostsSvc.create({
                username: 'Sunnyb',
                body: $scope.postBody
            }).success(function(post) {
                $scope.posts.unshift(post);
                $scope.postBody = null;
            });
        } else {
            console.log("Can't be empty!");
        }
    }
});

