import {Component, NgZone} from 'angular2/core';
import {RegisterForm} from '../register-form/register-form.ts';
import {LoginButtons} from 'angular2-meteor-accounts-ui/login-buttons';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';

@Component({
  selector: 'user-info-block',
  templateUrl: '/client/imports/user-info-block/user-info-block.html',
  directives: [
    LoginButtons,
    RegisterForm
  ]
})
export class UserInfoBlock {
    constructor(){
        
    }
    logout(){
        Meteor.logout();
    }
    get user(): Object{
        return Meteor.user();
    }
}
