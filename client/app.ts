import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, NgZone} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Presents as PresentsCollection} from '../collections/presents.ts';
import {Tracker} from 'meteor/tracker';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class Presents {
  presents: Array<Object>;
  constructor(zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
      this.presents = PresentsCollection.find().fetch();
    }));
  }
}

bootstrap(Presents);
