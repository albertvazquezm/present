import {Component, NgZone} from 'angular2/core';
import {PresentForm} from '../present-form/present-form.ts';
import {PresentList} from '../present-list/present-list.ts';
import { LoginButtons } from 'angular2-meteor-accounts-ui/login-buttons';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';

@Component({
  selector: 'user-column',
  templateUrl: '/client/imports/user-column/user-column.html',
  directives: [
    PresentForm,
    PresentList,
    LoginButtons
  ]
})
export class UserColumn {

}
