import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'header',
  templateUrl: '/client/imports/header/header.html',
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class Header {
}
