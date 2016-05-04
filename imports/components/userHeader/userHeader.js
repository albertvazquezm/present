import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './userHeader.html';
//import { Presents } from '../../api/presents.js';

class UserHeaderCtrl {
  constructor($scope) {
    /*$scope.viewModel(this);

    this.helpers({
      presents() {
        return Presents.find({});
      }
    })*/
  }
}

export default angular.module('userHeader', [
  angularMeteor
])
  .component('userHeader', {
    templateUrl: 'imports/components/userHeader/userHeader.html',
    controller: UserHeaderCtrl
  });
