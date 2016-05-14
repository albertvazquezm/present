import {Component} from 'angular2/core';

import {UserColumn} from '../user-column/user-column.ts';

@Component({
  selector: 'columns',
  templateUrl: '/client/imports/columns/columns.html',
  directives: [UserColumn]
})
export class Columns {}
