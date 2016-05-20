import 'reflect-metadata';
import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
//import {Presents} from '../../../collections/presents';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

@Component({
  selector: 'register-form',
  templateUrl: '/client/imports/register-form/register-form.html',
})
export class RegisterForm {
  registerForm: ControlGroup;

  constructor() {
    let fb = new FormBuilder();

    this.registerForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  register(user) {
    if (this.registerForm.valid) {
        Accounts.createUser({
            email: user.email,
            password: user.password,
            profile: {
              name: user.name
            }
        });
        (this.registerForm.controls['email']).updateValue('');
        (this.registerForm.controls['password']).updateValue('');
        (this.registerForm.controls['name']).updateValue('');
    }
  }
}
