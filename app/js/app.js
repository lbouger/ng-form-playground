var formApp = angular.module('formApp', []);

formApp.controller('formController', function($scope, $http){
    $scope.unitPrice = 55.65;
    /*$http.get('server/api/users')
        .success(function(data){
            $scope.users = data.users;
        });*/
        
    $scope.users = [{fullname:'User1', email:'user1@corp.com', arrival:new Date(), night:5,total:$scope.unitPrice*5},
    {fullname:'User2', email:'user2@corp.com', arrival:new Date(), night:4,total:$scope.unitPrice*4},
	{fullname:'User3', email:'user3@corp.com', arrival:new Date(), night:5,total:$scope.unitPrice*5},
	{fullname:'User4', email:'user4@corp.com', arrival:new Date(), night:3,total:$scope.unitPrice*3},
	{fullname:'User5', email:'user5@corp.com', arrival:new Date(), night:1,total:$scope.unitPrice*1},
	{fullname:'User6', email:'user6@corp.com', arrival:new Date(), night:2,total:$scope.unitPrice*2}];

    $scope.confirm = function(user){){
    	$scope.users.push(user);
		$scope.user = {};
        /*ttp.post('server/api/users', user)
            .success(function(data){
                $scope.users.push(user);
                // only available from angularjs 1.1.1
                // https://github.com/angular/angular.js/pull/1127
                $scope.myForm.$setPristine();
                $scope.user = {};
            });*/
    }

    $scope.calculate = function(value){
        $scope.user.total = $scope.unitPrice * value;
    }

    $scope.checkEmail = function(){
        if($scope.user.email === $scope.user.email2){
            $scope.myForm.email.$setValidity('samemail', true);
            $scope.myForm.email2.$setValidity('samemail', true);
        } else {
            $scope.myForm.email.$setValidity('samemail', false);
            $scope.myForm.email2.$setValidity('samemail', false);
        }
    }
});

formApp.filter('moon', function(){

    var MOON = {
        1 : '\u263D',
        2 : '\u263D\u263D',
        3 : '\u263D\u263D\u263D',
        4 : '\u263D\u263D\u263D\u263D',
        5 : '\u263D\u263D\u263D\u263D\u263D'
    }

    return function(value){
        return MOON[value];
    }
})
