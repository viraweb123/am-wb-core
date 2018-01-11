/**
 * Created by mgh on 2/26/17.
 */
angular.module('am-wb-core')

    /**
     * @ngdoc directive
     * @name wbUiSettingColor
     * @memberof am-wb-core
     * @description a setting section to set color.
     *
     */
    .directive('wbUiSettingColor', function () {
        return {
            templateUrl: 'views/directives/wb-ui-setting-color.html',
            restrict: 'E',
            scope: {
                title: '@title',
                value: '=value',
                icon: '@icon'
            }
        };
    });
