import {Component, NgZone} from 'angular2/core';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Meteor} from 'meteor/meteor';

@Component({
  selector: 'my-profile',
  templateUrl: '/client/imports/my-profile/my-profile.html'
})
export class MyProfile {
    constructor(){
        let fb = new FormBuilder();
        this.profileForm = fb.group({
          email: [''],
          name: ['']
        });
    }
    updateProfile(profile){
        if (this.profileForm.valid) {
            Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.name': profile.name }} );
        }
    }
    get user(): Object{
        return Meteor.user();
    }
}
