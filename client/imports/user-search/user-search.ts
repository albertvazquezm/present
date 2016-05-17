import {Component} from 'angular2/core';
//import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {UserSearchForm} from '../user-search-form/user-search-form.ts';

@Component({
    selector: 'user-search',
    templateUrl: '/client/imports/user-search/user-search.html',
    directives: [UserSearchForm]
})

export class UserSearch {}
