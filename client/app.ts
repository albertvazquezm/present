import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/platform/common';

import {PresentList} from './imports/present-list/present-list.ts';
import {UserSearch} from './imports/user-search/user-search.ts';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', as: 'PresentList', component: PresentList },
  { path: '/users', as: 'UserSearch', component: UserSearch }
])

class App {}

bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
