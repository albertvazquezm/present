import 'reflect-metadata';
import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {Presents} from '../../../collections/presents';

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
    if (this.presentForm.valid) {
      Presents.insert({
        name: present.name,
        description: present.description,
      });

      (this.presentForm.controls['name']).updateValue('');
      (this.presentForm.controls['description']).updateValue('');
    }
  }
}
