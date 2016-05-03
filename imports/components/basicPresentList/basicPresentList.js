import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './basicPresentList.html';
import { Presents } from '../../api/presents.js';

class BasicPresentListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      presents() {
        return Presents.find({});
      }
    })
  }
}

export default angular.module('basicPresentList', [
  angularMeteor
])
  .component('basicPresentList', {
    templateUrl: 'imports/components/basicPresentList/basicPresentList.html',
    controller: BasicPresentListCtrl
  });
