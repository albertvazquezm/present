import {Component, NgZone} from 'angular2/core';
import {PresentForm} from '../present-form/present-form.ts';
import {PresentList} from '../present-list/present-list.ts';
import {UserInfoBlock} from '../user-info-block/user-info-block.ts';

@Component({
  selector: 'user-column',
  templateUrl: '/client/imports/user-column/user-column.html',
  directives: [
    PresentForm,
    PresentList,
    UserInfoBlock
  ]
})
export class UserColumn {

}
