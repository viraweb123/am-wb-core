/* jslint todo: true */
/* jslint xxx: true */
/* jshint -W100 */
'use strict';

angular.module('ngMaterialWeburger')

/**
 * @ngdoc directive
 * @name donateMainApp.directive:mdeSocialList
 * @description فهرستی از شبکه‌های اجتمائی
 * 
 * یک فهرست از شبکه‌های اجتمائی نمایش داده می‌شود تا بتونیم به سادگی لیک
 * شبکه‌های رو بین کاربران به اشتراک بزاریم.
 */
.directive('wbSocialList', function() {
	return {
		restrict : 'E',
		replace : true,
		templateUrl : 'views/directives/wb-sociallist.html',
		scope : {
			mdeEditable: '=?',
			mdeModel: '=?',
			mdeParent: '=?'
		},
		controller : function($scope, $mdDialog, $act) {

			var scope = $scope;
		    var originatorEv;
			
			/**
			 * یک شبکه اجتمائی جدید به فهرست اضافه می‌کند
			 * 
			 * برای این کار یک درچه محاوره‌ای باز می‌شود و اطلاعات
			 * مورد نیاز از کاربر دریافت می‌شود.
			 */
			function addSocial(){
				return editSocial({}).then(function(model) {
					if (!scope.mdeModel.socials) {
						scope.mdeModel.socials = [];
					}
					scope.mdeModel.socials.push(model);
					return model;
				});
			}
			
			/**
			 * شبکه اجتمائی تعیین شده ویرایش می‌شود
			 * 
			 * شبکه اجمائی با یک دریچه محاوره‌ای به کاربر نمایش داده
			 * می‌شود تا اطلاعات جدید را در آن وارد کند. تغییرات بعد
			 * از تایید کاربر اعمال خواهد شد.
			 */
			function editSocial(social){
				return $mdDialog.show({
					controller : 'WbDialogsCtrl',
					templateUrl : 'views/dialogs/wb-social.html',
					parent : angular.element(document.body),
					clickOutsideToClose : true,
					locals : {
						mdeModel : social,
						style : {
							title : 'social'
						}
					}
				});
			}
			
			/**
			 * شبکه تعیین شده حذف خواهد شد.
			 * 
			 */
			function removeSocial(social) {
				var index = scope.mdeModel.socials.indexOf(social);
				if (index > -1) {
					scope.mdeModel.socials.splice(social, 1);
				}
			}
			
			/**
			 * عمل لود کردن شبکه اجتمائی
			 * 
			 * این فراخوانی عمل تعیین شده برای شبکه اجتمائی را اجرا
			 * می‌کند.
			 */
			function gotoSocial(social){
				if(scope.mdeEditable){
					return editSocial(social);
				}
				$act.execute(social.action);
			}
			
			function removeWidget() {
				if (scope.mdeParent) {
					scope.mdeParent.removeWidget(scope.mdeModel);
				}
			}
			
			function openMenu($mdOpenMenu, ev) {
				originatorEv = ev;
				$mdOpenMenu(ev);
			}
			
			function settings (){
				return $mdDialog.show({
					controller : 'WbDialogsCtrl',
					templateUrl : 'views/dialogs/wb-settings.html',
					parent : angular.element(document.body),
					clickOutsideToClose : true,
					locals : {
						mdeModel : scope.mdeModel,
						style : {
							pages : ['general', 'background']
						}
					}
				});
			}
			// مقداردهی اسکوپ
			scope.add = addSocial;
			scope.edit = editSocial;
			scope.delete = removeSocial;
			scope.gotoSocial = gotoSocial;
			scope.removeWidget = removeWidget;
			
			scope.settings = settings;
			scope.openMenu = openMenu;
			
		}
	};
});
