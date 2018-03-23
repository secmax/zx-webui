/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('ZXwebUI.pages.ui.typography', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.typography', {
          url: '/typography',
          templateUrl: 'app/pages/ui/typography/typography.html',
          title: '字体和排版',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
