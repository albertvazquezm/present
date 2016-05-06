import angular from 'angular';
import angularMeteor from 'angular-meteor';
import basicPresentList from '../imports/components/basicPresentList/basicPresentList';
import userHeader from '../imports/components/userHeader/userHeader';
import '../imports/startup/accounts-config.js';

angular.module('present', [
  angularMeteor,
  'accounts.ui',
  basicPresentList.name,
  userHeader.name
]);
