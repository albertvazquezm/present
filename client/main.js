import angular from 'angular';
import angularMeteor from 'angular-meteor';
import basicPresentList from '../imports/components/basicPresentList/basicPresentList';

angular.module('present', [
  angularMeteor,
  basicPresentList.name
]);
