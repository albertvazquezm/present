import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {APP_BASE_HREF} from 'angular2/platform/common';

import {Columns} from './imports/columns/columns.ts';
import {UserSearch} from './imports/user-search/user-search.ts';
import {NotificationsService} from './imports/notifications/notifications.service.ts';

var notifications = new NotificationsService();
notifications.startForOwnPresentReservations();

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '...', as: 'Columns', component: Columns },
])

class App {}

bootstrap(App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
