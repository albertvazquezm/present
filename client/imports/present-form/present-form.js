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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var presents_1 = require('../../../collections/presents');
var PresentForm = (function () {
    function PresentForm() {
        var fb = new common_1.FormBuilder();
        this.presentForm = fb.group({
            name: ['', common_1.Validators.required],
            description: ['', common_1.Validators.required]
        });
    }
    PresentForm.prototype.addPresent = function (present) {
        if (this.presentForm.valid) {
            presents_1.Presents.insert({
                name: present.name,
                description: present.description,
            });
            (this.presentForm.controls['name']).updateValue('');
            (this.presentForm.controls['description']).updateValue('');
        }
    };
    PresentForm = __decorate([
        core_1.Component({
            selector: 'present-form',
            templateUrl: '/client/imports/present-form/present-form.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PresentForm);
    return PresentForm;
}());
exports.PresentForm = PresentForm;
//# sourceMappingURL=present-form.js.map