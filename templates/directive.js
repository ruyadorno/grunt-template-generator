/**
 * @ngdoc directive
 * @name <%= meta.acronym %>Directives.directive:<%= meta.className %>
 * @description
 * @restrict EA
 * @scope true
 * @requires
 * @param {object} options Configuration options for the directive
 */

angular.module('<%= meta.acronym %>Directives').directive('<%= meta.className %>', [function () {
  return {
    restrict: "EA",
    replace: true,
    scope: {
      options: '='
    },
    templateUrl: "common/app/components/<%= meta.className %>/<%= meta.className %>.tpl.html",
    controller: function ($scope) {
      /***************************************************
       * Exposed for testing
       ***************************************************/

      /***************************************************
       * Scope variables
       ***************************************************/

      /***************************************************
       * Scope functions
       ***************************************************/

      /***************************************************
       * Private variables
       ***************************************************/

      /***************************************************
       * Private functions
       ***************************************************/
    }
  };
}]);