(function(){
	'use strict';

	angular.module('public')
		   .controller('InfosController', InfosController);

	InfosController.$inject = ['MenuService', 'UserService', 'ApiPath'];
	function InfosController(MenuService, UserService, ApiPath){
		var $infosCtrl = this;
		$infosCtrl.user = UserService.getUser();
		if ($infosCtrl.user){
			console.log($infosCtrl.user);
			$infosCtrl.user.path = ApiPath;
			var promise = MenuService.getMenuItemByShortName($infosCtrl.user.favoritemenu);
			promise
			.then(function(result){
				$infosCtrl.user.favoritemenu = promise.$$state.value
			})
		};
	};
})();
