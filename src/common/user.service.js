(function(){
	'use strict';

	angular.module('common')
		.service('UserService', UserService);

	UserService.$inject = ['$window'];
	function UserService($window){
		var service = this;
		service.user = null;

		service.setUser = function(user){
			service.user = user;
			$window.localStorage.setItem('default', JSON.stringify(service.user));
			//console.log(service.account);
		};

		service.getUser = function(){
			service.user = JSON.parse($window.localStorage.getItem('default'));
			//console.log(service.account);
			return service.user
		};
	}
})();
