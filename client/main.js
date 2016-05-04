import angular from 'angular';
import angularMeteor from 'angular-meteor';
import basicPresentList from '../imports/components/basicPresentList/basicPresentList';
import userHeader from '../imports/components/userHeader/userHeader';

angular.module('present', [
  angularMeteor,
  basicPresentList.name,
  userHeader.name
]);
