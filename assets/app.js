var app=angular.module("app",[]);angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(o,t){t.fetch().success(function(t){o.posts=t}).error(function(o){console.log(o)}),o.addPost=function(){o.postBody?t.create({username:"Sunnyb",body:o.postBody}).success(function(t){o.posts.unshift(t),o.postBody=null}):console.log("Can't be empty!")}}]),angular.module("app").service("PostsSvc",["$http",function(o){this.fetch=function(){return o.get("/api/posts")},this.create=function(t){return o.post("/api/posts",t)}}]),console.error("error!");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJQb3N0c1N2YyIsImZldGNoIiwic3VjY2VzcyIsInBvc3RzIiwiZXJyb3IiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwidXNlcm5hbWUiLCJib2R5IiwicG9zdCIsInVuc2hpZnQiLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxLQUFBQyxRQUFBQyxPQUFBLFNDQ0FELFNBQUFDLE9BQUEsT0FBQUMsV0FBQSxhQUFBLFNBQUEsV0FBQSxTQUFBQyxFQUFBQyxHQUVBQSxFQUFBQyxRQUNBQyxRQUFBLFNBQUFDLEdBQ0FKLEVBQUFJLE1BQUFBLElBRUFDLE1BQUEsU0FBQUMsR0FDQUMsUUFBQUMsSUFBQUYsS0FHQU4sRUFBQVMsUUFBQSxXQUNBVCxFQUFBVSxTQUNBVCxFQUFBVSxRQUNBQyxTQUFBLFNBQ0FDLEtBQUFiLEVBQUFVLFdBQ0FQLFFBQUEsU0FBQVcsR0FDQWQsRUFBQUksTUFBQVcsUUFBQUQsR0FDQWQsRUFBQVUsU0FBQSxPQUdBSCxRQUFBQyxJQUFBLHVCQ3JCQVgsUUFBQUMsT0FBQSxPQUFBa0IsUUFBQSxZQUFBLFFBQUEsU0FBQUMsR0FDQUMsS0FBQWhCLE1BQUEsV0FDQSxNQUFBZSxHQUFBRSxJQUFBLGVBR0FELEtBQUFQLE9BQUEsU0FBQUcsR0FDQSxNQUFBRyxHQUFBSCxLQUFBLGFBQUFBLE9BSUFQLFFBQUFGLE1BQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSk7IiwiXG5hbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBQb3N0c1N2Yykge1xuXG4gICAgUG9zdHNTdmMuZmV0Y2goKVxuICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbihwb3N0cykge1xuICAgICAgICAgICAgJHNjb3BlLnBvc3RzID0gcG9zdHM7XG4gICAgICAgIH0pXG4gICAgICAgIC5lcnJvcihmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoJHNjb3BlLnBvc3RCb2R5KSB7XG4gICAgICAgICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnU3VubnliJyxcbiAgICAgICAgICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcbiAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24ocG9zdCkge1xuICAgICAgICAgICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHBvc3QpO1xuICAgICAgICAgICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuJ3QgYmUgZW1wdHkhXCIpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XG4gICAgdGhpcy5mZXRjaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24ocG9zdCkge1xuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xuICAgIH07XG59KTtcblxuY29uc29sZS5lcnJvcignZXJyb3IhJyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9