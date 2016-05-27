import {NgZone, Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

@Component({
  selector: 'user-search-form',
  templateUrl: '/client/imports/user-search-form/user-search-form.html'
})

export class UserSearchForm {
    users: Array
    constructor(zone: NgZone){
        this.zone = zone;
        let fb = new FormBuilder();

        this.searchForm = fb.group({
          query: ['', Validators.required],
        });
    }
    
    onSearchKeyup(value){
        if(value.length > 3){
            this.users = Meteor.users.find({
                'profile.name': {$regex : '.*' + value + '.*'}
            }).fetch();
        }else{
            this.users = [];
        }
    }
}
