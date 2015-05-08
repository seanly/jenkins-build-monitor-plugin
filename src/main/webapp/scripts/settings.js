angular.
    module('buildMonitor.settings', [ 'buildMonitor.services', 'uiSlider']).

    controller('controlPanel', ['$scope', 'cookieJar',
        function ($scope, cookieJar) {
            'use strict';

            $scope.settings.fontSize        = cookieJar.get('fontSize',        1);
            $scope.settings.numberOfColumns = cookieJar.get('numberOfColumns', 2);
            $scope.settings.colourBlind     = cookieJar.get('colourBlind',     0);
            $scope.settings.showCulprits    = cookieJar.get('showCulprits',    1);
            $scope.settings.showTestResult  = cookieJar.get('showTestResult',  1);

            angular.forEach($scope.settings, function(value, name) {
                $scope.$watch('settings.' + name, function(currentValue) {
                    cookieJar.put(name, currentValue);
                });
            });
        }]);