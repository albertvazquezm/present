import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';


@Component({
  selector: 'user-search-form',
  templateUrl: '/client/imports/user-search-form/user-search-form.html'
})

export class UserSearchForm {
    constructor(){
        let fb = new FormBuilder();

        this.searchForm = fb.group({
          query: ['', Validators.required],
        });
    }
    
    search(){
        console.log('search');
    }
}
