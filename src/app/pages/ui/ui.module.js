/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('ZXwebUI.pages.ui', [
    'ZXwebUI.pages.ui.typography',
    'ZXwebUI.pages.ui.buttons',
    // 'ZXwebUI.pages.ui.icons',
    'ZXwebUI.pages.ui.modals',
    'ZXwebUI.pages.ui.grid',
    'ZXwebUI.pages.ui.alerts',
    'ZXwebUI.pages.ui.progressBars',
    'ZXwebUI.pages.ui.notifications',
    // 'ZXwebUI.pages.ui.tabs',
    // 'ZXwebUI.pages.ui.slider',
    // 'ZXwebUI.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: '标准化UI',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 0,
          },
        });
  }

})();
