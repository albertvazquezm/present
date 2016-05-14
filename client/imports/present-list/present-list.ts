import {Component, NgZone} from 'angular2/core';
import {Presents} from '../../../collections/presents.ts';
import {PresentForm} from '../present-form/present-form.ts';
import {Mongo} from 'meteor/mongo';
import {Tracker} from 'meteor/tracker';

@Component({
  selector: 'present-list',
  templateUrl: '/client/imports/present-list/present-list.html',
  directives: [PresentForm]
})
export class PresentList {
  presents: Mongo.Cursor;
  constructor(zone: NgZone) {
      Tracker.autorun(() => zone.run(() => {
        this.presents = Presents.find().fetch();
      }));
  }
  removePresent(present){
    Presents.remove(present._id);
  }
}
