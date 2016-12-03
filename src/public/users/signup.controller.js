(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService', 'MenuService','$scope'];
function SignupController(UserService, MenuService,$scope) {
  var $signupCtrl = this;
  $signupCtrl.user = {};
  $signupCtrl.save = false;
  $signupCtrl.itemNotFound = false;

  $signupCtrl.submit = function(){
    if($signupCtrl.user.favoritemenu){
				$signupCtrl.user.favoritemenu = $signupCtrl.user.favoritemenu.toUpperCase();
			};
      MenuService.getMenuItems($signupCtrl.user.favoritemenu)
					   .then(function(response){
					   			$signupCtrl.user.favoritemenu = response.data;
					   			$signupCtrl.save = true;
					   			$signupCtrl.itemNotFound = false;
					   		},function(error){
    							$signupCtrl.itemNotFound = true;
  							}
  						);
              console.log($signupCtrl.itemNotFound);
			UserService.setUser($signupCtrl.user);
		};
  }

})();
