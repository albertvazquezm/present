import {Component, NgZone} from 'angular2/core';
import {Presents} from '../../../collections/presents.ts';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';
import {NgClass, NgIf} from 'angular2/common';

@Component({
    selector: 'present-list',
    templateUrl: '/client/imports/present-list/present-list.html',
    directives: [
        NgClass, 
        NgIf
    ]
})
export class PresentList {
    presents: Mongo.Cursor;
    constructor(zone: NgZone) {
      Tracker.autorun(() => zone.run(() => {
        this.presents = Presents.find({
          owner: Meteor.userId()
        }).fetch();
      }));
    }
    removePresent(present){
        Presents.remove(present._id);
    }
    reservePresent(present){
        Presents.update(present._id, {
          $set: {
            reserved: (present.reserved) ? false : Meteor.userId()
          }
        });
    }

}
