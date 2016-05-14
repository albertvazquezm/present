"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var presents_ts_1 = require('../../../collections/presents.ts');
var present_form_ts_1 = require('../present-form/present-form.ts');
var tracker_1 = require('meteor/tracker');
var PresentList = (function () {
    function PresentList(zone) {
        var _this = this;
        tracker_1.Tracker.autorun(function () { return zone.run(function () {
            _this.presents = presents_ts_1.Presents.find().fetch();
        }); });
    }
    PresentList.prototype.removePresent = function (present) {
        presents_ts_1.Presents.remove(present._id);
    };
    PresentList = __decorate([
        core_1.Component({
            selector: 'present-list',
            templateUrl: '/client/imports/present-list/present-list.html',
            directives: [present_form_ts_1.PresentForm]
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], PresentList);
    return PresentList;
}());
exports.PresentList = PresentList;
//# sourceMappingURL=present-list.js.map