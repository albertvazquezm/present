import {NgZone, Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {RouteParams} from 'angular2/router';
import {PresentList} from '../present-list/present-list.ts';

@Component({
  selector: 'user-detail',
  templateUrl: '/client/imports/user-detail/user-detail.html',
  directives: [
      PresentList
  ]
})

export class UserDetail {
    user: Object
    constructor(zone: NgZone, params: RouteParams){
        Tracker.autorun(() => zone.run(() => {
            this.user = Meteor.users.findOne({
                '_id': params.get('id')
            });
        }));
    }
}
