import { Injectable } from 'angular2/core';
import {Presents} from '../../../collections/presents.ts';
import {Meteor} from 'meteor/meteor';

@Injectable()

export class NotificationsService {
    startForOwnPresentReservations(){
        Presents.find({
          owner: Meteor.userId()
        }).observe({
            changed: (newDocument, oldDocument) => {
                
            }
        });
    }
    notify(){
        
    }
}