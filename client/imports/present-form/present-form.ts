import 'reflect-metadata';
import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Presents} from '../../../collections/presents';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'present-form',
  templateUrl: '/client/imports/present-form/present-form.html',
})
export class PresentForm {
  presentForm: ControlGroup;

  constructor() {
    let fb = new FormBuilder();

    this.presentForm = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addPresent(present) {
    if (this.presentForm.valid && Meteor.userId()) {
      Presents.insert({
        name: present.name,
        description: present.description,
        owner: Meteor.userId()
      });
      (this.presentForm.controls['name']).updateValue('');
      (this.presentForm.controls['description']).updateValue('');
    }
  }
}
