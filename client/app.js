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
require('reflect-metadata');
require('zone.js/dist/zone');
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var Presents = (function () {
    function Presents() {
        this.presents = [
            { 'name': 'Dubstep-Free Zone',
                'description': 'Can we please just for an evening not listen to dubstep.',
                'img': 'http://placehold.it/200x200'
            },
            { 'name': 'All dubstep all the time',
                'description': 'Get it on!',
                'img': 'http://placehold.it/200x200'
            },
            { 'name': 'Savage lounging',
                'description': 'Leisure suit required. And only fiercest manners.',
                'img': 'http://placehold.it/200x200'
            }
        ];
    }
    Presents = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'client/app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Presents);
    return Presents;
}());
browser_1.bootstrap(Presents);
//# sourceMappingURL=app.js.map