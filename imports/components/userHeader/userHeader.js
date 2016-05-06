import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './userHeader.html';
import Meteor from 'meteor/meteor';
//import { Presents } from '../../api/presents.js';

class UserHeaderCtrl {
  constructor($scope) {
    $scope.viewModel(this);
  }
}

export default angular.module('userHeader', [
  angularMeteor
])
  .component('userHeader', {
    templateUrl: 'imports/components/userHeader/userHeader.html',
    controller: UserHeaderCtrl
  });
