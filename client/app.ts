import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class Presents {
  presents: Array<Object>;
  constructor() {
    this.presents = [
      {'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.',
        'img': 'http://placehold.it/200x200'
      },
      {'name': 'All dubstep all the time',
        'description': 'Get it on!',
        'img': 'http://placehold.it/200x200'
      },
      {'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'img': 'http://placehold.it/200x200'
      }
    ];
  }
}

bootstrap(Presents);
