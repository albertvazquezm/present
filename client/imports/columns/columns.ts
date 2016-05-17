import {Component} from 'angular2/core';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {UserColumn} from '../user-column/user-column.ts';
import {UserSearch} from '../user-search/user-search.ts';

@RouteConfig([
  { path: '/', as: 'UserSearch', component: UserSearch },
])

@Component({
  selector: 'columns',
  templateUrl: '/client/imports/columns/columns.html',
  directives: [UserColumn, UserSearch, ROUTER_DIRECTIVES]
})

export class Columns {}
